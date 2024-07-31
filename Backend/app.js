require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;
const jwtKey = process.env.JWT_SECRET_KEY;
const mongoUri = process.env.MONGODB_URI;

// MongoDB models
const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    password: String,
    employed: String,
    location: String
});
const User = mongoose.model('User', userSchema);

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connection success...');
}).catch(err => {
    console.error('Error while connecting to Database', err);
});

app.post('/signup', async (req, res) => {
    try {
        const { fullname, email, phone, password, employed, location } = req.body;

        if (!fullname || !email || !phone || !password || !employed || !location) {
            console.log(fullname + email + phone + password + employed + location);
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUserByPhone = await User.findOne({ phone });
        if (existingUserByPhone) {
            return res.status(409).json({ message: 'Phone number already exists' });
        }

        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullname: fullname,
            email,
            phone,
            password: hashedPassword,
            employed,
            location
        });
        console.log(newUser);
        await newUser.save();

        res.status(200).json({
            fullname: newUser.fullname,
            email: newUser.email
        });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error during signup' });
    }
});

app.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password!' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid username or password!' });
        }

        const expirationTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
        const token = jwt.sign({ username: user.username }, jwtKey, {
            expiresIn: '24h'
        });

        res.status(200).json({
            fullname: user.fullname,
            token
        });
    } catch (error) {
        console.error('Error during signin:', error);
        res.status(500).json({ message: 'Server error during signin' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
