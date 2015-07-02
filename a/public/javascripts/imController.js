
//http://jsfiddle.net/DotDotDot/7AU6A/1/
//http-server



img.controller('imgController', ['$scope', '$routeParams', '$http', '$location', 
function ($scope, $routeParams, $http, $location) {
 
 var aImg =[
    {
      g:"http://www.wallpaperup.com/39942/bokeh_color_pencil_abstract_macro_pattern.html",
      c:"http://www.wallpaperup.com/uploads/wallpapers/2012/08/06/9317/thumb_694fafdee5d5c4f12083fa4961582e0f1.jpg"
    },
    {
      g:"http://www.wallpaperup.com/39942/bokeh_color_pencil_abstract_macro_pattern.html",
      c:"http://www.wallpaperup.com/uploads/wallpapers/2012/08/06/9317/thumb_694fafdee5d5c4f12083fa4961582e0f2.jpg"
    },
    {
      g:"http://www.wallpaperup.com/39942/bokeh_color_pencil_abstract_macro_pattern.html",
      c:"http://www.wallpaperup.com/uploads/wallpapers/2012/08/06/9317/thumb_694fafdee5d5c4f12083fa4961582e0f3.jpg"
    },
  ];


var tempImg=imgsIds(aImg);
$scope.imgsChk={};




for(var r in tempImg)
{
  for(var ri in tempImg[r])
  {
    var liga=tempImg[r][ri];
    $scope.imgsChk[liga]=false;
  }

}

$scope.imgs=tempImg;












$scope.checkClick=function(id)
{
  var e=$("#"+id);
  if(e)
  {
    var fa=e.parent();
    if(fa && fa.length>0)
    {
      if(fa[0].id=="si")
      {
        e.prependTo("#no");      
      }
      else
       {
        e.prependTo("#si");      
       } 

    }
  }
  
};


$scope.saveIt= function()
{
  var imgFinales=[];
  for(var p in $scope.imgsChk)
  {
      if($scope.imgsChk[p])
      {
          imgFinales.push(p);
      }

  }

if(imgFinales.length>0)
{
  var data={img:imgFinales}
  $http.post('/save/' + opcion, data).success(function (d) {
                       alert("=)");
                    }).error(function(){alert("too bad");});

}

}



// console.log($scope.imgs);
// console.log($scope.imgsChk);

function imgsIds(a)
{ 
   var imgs=[];

    for(var i=0;i<a.length;i++)
    {
       imgs.push(
         {
              id:"i"+i,//,getId(""a[i].c""),
              g:a[i].g,
              c:a[i].c,
         }
       );
    }
    return imgs;
}
  
function getId(c)
{
   var id=replace(c,"/","_");
   id=replace(id,":","cOlOn");
   return id;
}

  function replace(cadena,cViejo,cNuevo)
  {
    return cadena.replace(new RegExp(cViejo, 'g'),cNuevo);
  }
 console.log("mama");

   if ($location) {

            var p = { scope: $scope, routeParams: $routeParams, http: $http, location: $location };
            var op = a.getPathOption($location);
            console.log(op);
            switch (op) {

                case "":
                 $http.get("/resumen")
                       .success(function(data){
                                a.setDataScope(data,$scope);
                           }
                        ).error(console.log("damn it nigga all"));
                break;
                case "show":
                      p.http.get("/" + "main" + "/get/"+$scope.id)
                       .success(function(data){
                                a.setDataScope(data,$scope);
                           }
                        ).error(console.log("damn it nigga"));
                    break;
            }

            // if (!($scope.clickItemGrid && $scope.menuclick)) {
            //     $scope.clickItemGrid = function ($event) {
            //         jagged.clickItemGrid($event, $location);
            //     };

            //     $scope.menuclick = function ($event) {
            //         jagged.menuclick($event, $location, $scope, $http, service, $rootScope);
            //     };
            // }
        }

}//fin funcion controller

]);


