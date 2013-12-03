/**
 * custom remote
 */
jQuery.validator.addMethod("emailcheck", function(value, element, params) {
    params.data[element.name] = value;

    if ( this.optional(element) )
        return "dependency-mismatch";

    var previous = this.previousValue(element);
    if (!this.settings.messages[element.name] )
        this.settings.messages[element.name] = {};
    previous.originalMessage = this.settings.messages[element.name].remote;
    this.settings.messages[element.name].remote = previous.message;

    param = params;
    param = typeof param == "string" && {url:param} || param;

    if ( previous.old !== value ) {
        previous.old = value;
        var validator = this;
        this.startRequest(element);
        var data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
                url: params.url,
                mode: "abort",
                port: "validate" + element.name,
                dataType: "json",
                data: params.data,
                success: function(response) {
                        validator.settings.messages[element.name].remote = previous.originalMessage;
                        var valid = response.ok == "true";
                        if ( valid ) {
                                var submitted = validator.formSubmitted;
                                validator.prepareElement(element);
                                validator.formSubmitted = submitted;
                                validator.successList.push(element);
                                validator.showErrors();
                        } else {
                                var errors = {};
                                var message = (previous.message = response.error || validator.defaultMessage( element, "remote" ));
                                errors[element.name] = $.isFunction(message) ? message(value) : message;
                                validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                }
        }, param));
        return "pending";
    } else if( this.pending[element.name] ) {
        return "pending";
    }
    return previous.valid;
}, '');