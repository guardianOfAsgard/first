var a=new assistant();

function  assistant(){

  this.getPathOption = function ($location) {
        var aType = $location.$$path.split('/');
        return aType.length > 1 ? aType[1] : "bad path configuration";
    }


    this.setDataScope=function(data, $scope) {
        for (var d in data) {
            $scope[d] = data[d];
        }
    };


}


var QueryString = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], pair[1]];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(pair[1]);
        }
    }
    return query_string;
}();



function uiSelectAdministrador() {
    this.add = function (propiedadesUiSelect, scope) {
        if (!(scope["relacionUiSelect"] instanceof Array)) scope["relacionUiSelect"] = [];
        scope["relacionUiSelect"].push(propiedadesUiSelect);
    }

    //Devuelve  el nombre de el campo correspondiente ala clase c#, el cual corresponde al value seleccionado por el usuario
    //Omar Rios 12/08/2014
    //Parametros
    //nombreObjetoSelect: Es el nombre del objteo que se utiliza como ng-model del control 'ui-select'
    //p: objeto con los valores scope
    this.getNombreCampoNgModel=function (nombreObjetoSelect, p) {
        var l = p.scope['relacionUiSelect'].length;
        while (l--) {
            if (p.scope['relacionUiSelect'][l]['nombreObjetoSelect'] == nombreObjetoSelect)
                return p.scope['relacionUiSelect'][l]['nombreCampoNgModel'];
        }

    }

    //Devuelve  Nombre del campo del source (json que contiene todos los datos mostrados en un combo,select o dropdown) del control 'ui-select', que  actua como value del mismo este sera el value para el campo 'nombreCampoNgModel' 
    //Omar Rios 12/08/2014
    //Parametros
    //nombreObjetoSelect: Es el nombre del objteo que se utiliza como ng-model del control 'ui-select'
    //p: objeto con los valores scope
    this.getnombreCampoValueSelet = function (nombreObjetoSelect, p) {
        var l = p.scope['relacionUiSelect'].length;
        while (l--) {
            if (p.scope['relacionUiSelect'][l]['nombreObjetoSelect'] == nombreObjetoSelect)
                return p.scope['relacionUiSelect'][l]['nombreCampoValueSelet'];
        }
    }
    

    //Devuelve  Nombre del campo del source (json que contiene todos los datos mostrados en un combo,select o dropdown) del control 'ui-select', que  actua como value del mismo este sera el value para el campo 'nombreCampoNgModel' 
    //Omar Rios 12/08/2014
    //Parametros
    //nombreCampoNgModel: Es el nombre de el campo correspondiente ala clase c#, el cual corresponde al value seleccionado por el usuario
    //p: objeto con los valores scope
    this.setUiSelectedValue = function (nombreCampoNgModel,valorCampo,scope)
    {
        if (scope['relacionUiSelect']) {
            var l = scope['relacionUiSelect'].length;

            //Buscando en la relacion UiSelect el nombre del campo que es devuelto como parte del json del server, el cual es una propiedad dela calse c#
            while (l--) {
                var relacion = scope['relacionUiSelect'][l];
                if (relacion['nombreCampoNgModel'] == nombreCampoNgModel) {
                    //Obteniendo el source del select segun el campo 'nombreCampoNgModel', que se recibio como parametro
                    var source = scope[relacion['nombreSourceSelect']];
                    if (source) {
                        var lSource = source.length;
                        while (lSource--) {
                            //Iterando en el source del select para obtener el objeto correspondiente al id enviado del server, y asi poder asignarlo al scope,para que este actualice la interfaz del usuario
                            if (source[lSource][relacion['nombreCampoValueSelet']] === valorCampo) {
                                if (scope[relacion['nombreObjetoSelect']]) {
                                    scope[relacion['nombreObjetoSelect']].selected = source[lSource];//Asignando el objeto del source para que pueda ser actualizado uiSelcet
                                    return true;//se retorna true para que esta propiedad no se asigne al scope
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }



}