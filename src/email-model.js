class EmailModel {
    constructor(from, to, body, isHtml) {
        this.from = from;
        this.to = to;
        this.body = body;
        this.isHtml = isHtml;
    }
}

module.exports = EmailModel;
