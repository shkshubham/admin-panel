import CommonAPI from '../apis/CommonAPI';
class CRUDAction {
    constructor(name, types){
        this.api = new CommonAPI(name);
        this.types = types;
    }
    createPayload = (payload, type) => {
        return {
            payload,
            type
        }
    }
    addAction = (data) => {
        return new this.createPayload(this.api.createAPI(data), this.types[0])
    }
    listAction = () => {
        return new this.createPayload(this.api.listAPI(), this.types[1])
    }
    updateAction = (data) => {
        return new this.createPayload(this.api.updateAPI(data), this.types[2])
    }
    deleteAction = (id) => {
        return new this.createPayload(this.api.deleteAPI(id), this.types[3])
    }
}
export default CRUDAction;