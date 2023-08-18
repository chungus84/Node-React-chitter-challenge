export default class PeepModel {
    constructor(_id = null, message, createdAt, userName) {
        this._id = _id;
        this.message = message;
        this.createdAt = createdAt;
        this.userName = userName;

    }
}
