module.exports = {
    requiredTrue: { required: true },
    requiredFalse: { required: false },
    StringBasic: { type: String },
    BooleanFalse: { type: Boolean, default: false },
    BooleanTrue: { type: Boolean, default: true },
    DateNow: { type: Date, default: Date.now },
    StringMaxLength: require('./max-length'),
    StringLowercase: { lowercase: true }
}