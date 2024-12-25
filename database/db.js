const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://Vihang:vihang123@cluster0.0tq4xsw.mongodb.net/pm?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
};

module.exports = { connectDatabase };
