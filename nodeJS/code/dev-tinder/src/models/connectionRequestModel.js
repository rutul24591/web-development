const Mongoose = require("mongoose");
const validator = require("validator");

const connectionRequestSchema = new Mongoose.Schema(
    {
        fromUserId: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        toUserId: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: {
                values: ["accepted", "ignored", "rejected", "interested"],
                message: `{VALUE} is incorrect status type`,
            },
        },
    },
    {
        timestamps: true,
    }
);

// Compound indexing
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });

connectionRequestSchema.pre("save", function (next) {
    const connectionRequest = this;

    // Check if from to user id's are same
    if (connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
        throw new Error("Cannot send connection to oneself");
    }
    next();
});

const ConnectionRequestModel = new Mongoose.model(
    "connectionRequest",
    connectionRequestSchema
);

module.exports = ConnectionRequestModel;
