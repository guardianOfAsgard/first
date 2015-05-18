var inicio= now();
var pausa= 0;
var running=0;
var pausaCounter=0;
var wakeUp=[   '{{|└(>o< )┘|}}',   'ｏ( ><)o',   '（｀・∧・´）ノ●',   '(＃｀д´)ﾉ',   '＼(`O´）／θ','Σ(▼□▼メ)','(ノಠ益ಠ)ノ','ᕙ(⇀‸↼‶)ᕗ','s(・｀ヘ´・;)ゞ','o( -`д´-｡)o','o( -`д´-｡)o','(屮ಠ益ಠ)屮','"(yಠ,ಠ)y"','ლ(ಠ益ಠლ)','ヾ(   ￣Ｏ￣)ﾂ','＿φ(◎‿ ◎ )','＿φ(°-°=)','＿φ(．．;)','＿〆(。_ 。#)','（＾～＾）ノ','＼(o￣∇￣o)/','"""\\(° ∇°)/"""','ಠ_ಠ','凸 (｀0´)凸','凸(｀⌒´メ)凸','w(°ｏ°)w','L(・o・)」','【• ▂ •】What?','（◎ . ◎）','??(ノ;´Д`)ノ'  ]; 
var sleeping=[  '(。￣-￣)    ℤℤℤ',    '(ー。ー) zzz',     '［(－_－)］zzz',     '★☽(。￣-￣)',       '(∪｡∪)｡｡｡zzz',         '(_  _)zZZ','              z\n'+'             z\n'+'              Z\n'+'  （ー  一）..Zz'  ];
var isTomatl=false;
var timeTomatl=0;
var isWorking=true;
var isPaused=false;
var respaldoTomatl=0;
var aTomatl=[],
    aPauses=[];
var daCounter=0;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var what=require('what.js');


var cTask="";
var cActivity="";













function findIndicesTask(activity)
{
    var a=what.what[cActivity].weeks;
    var today=new Date();
    var noWeekYear=weekNumberYear(today);
    var weFoundIt;
    var iday;
    var iTask;
    var iWeek=indexByProperty(a,"noWeek",noWeekYear);
    if(indexWeek)
    {
        iday=indexByProperty(a[iWeek].days,"day",today.toLocaleDateString());
        if(iday)
        {
            iTask=indexByProperty(a[iWeek].days[iday].tasks,"task",cTask);
            weFoundIt=true;
        }    
    }
    return {weFoundIt:weFoundIt,iWeek:iWeek,iday:iday,iTask:iTask};
}

function indexByProperty(theArray,property,value)
{
    if(theArray)
    {
        var l=theArray.length;
        if(property)
        {
            while(l--)
            {
                if(theArray[l][property]===value)
                {
                    return l;
                }
            }
        }
    }
}

function isDefined(thing)
{
    return thing!=null && thing!=undefined;
}



function addWeek(a)
{
            dWeek=a.weeks[i.iWeek-1];//.days[0].tasks;
            dWeek.noWeek=weekNumberYear(new Date());
            var ld=dWeek.days.length;
            while(ld--)
            {
                var lt=dWeek.days[ld].tasks.length;
                while(lt)
                {
                    dWeek[ld].tasks[lt].totalTomatl=0;
                    dWeek[ld].tasks[lt].noTomatl=0;
                }
            }
            a.weeks.push({dWeek});
}


function updateStatusT(){

    creaArchivo(w,"bak.js")

    var a=what.what[cActivity].weeks;
    var i=findIndicesTask(cActivity);
    var theTask;
    var w;

    if(isDefined(i.iWeek))
    {
        w=a.weeks[i.iWeek];
        if(isDefined(i.iday[i.iday]))
        {
            theTask=w.days[i.iday].tasks[i.i];
            theTask
        }
    }
    else
    {
        addWeek(a);        
    }


    // var week=findWeek(cActivity);


    //     var itemCurrentWeek
    //     if(indiceWeek>-1)
    //     {
    //         itemCurrentWeek=w[indiceWeek].history;
    //     }
    //     else
    //     {
    //         var cActivity=iActivity(w);
    //         if(cActivity)
    //         {var last={"w":noCurrentWeek,"t":cActivity,"hp":cActivity.hp,"history":{"l":"w","tt":0,"ts":cts,"t":0,"p":cActivity.history.p,"te":cTask}};
    //                     itemCurrentWeek=last.history;
    //                     w.push(itemCurrentWeek);}
    //     }

        itemCurrentWeek.h=itemCurrentWeek.h++;
        itemCurrentWeek.ht=itemCurrentWeek.h++;

        creaArchivo(w,"what.js");

}

function iTomatls()
{
    
}

function iActivity(w)
{
    if(cActivity && cTask)
    {
        var l=w.length;
        while(l--)
        {
            if(w[l].tg==cActivity)
            {
                return w[l];
            }
        }
    }
}










function creaArchivo(objetom,nameFile)
{
    fs.writeFile(  , JSON.stringify(objeto,null,3), function(err) {
        if(err) {
             console.log("fk"+err);
        } else {
            // console.log("The file was saved!");
        }
    }); 

}

































function weekNumberYear( d ) { 
 
  var target  = new Date(d.valueOf());  
  
  var dayNr   = (d.getDay() + 6) % 7;  
 
  target.setDate(target.getDate() - dayNr + 3);  
 
  var jan4    = new Date(target.getFullYear(), 0, 4);  
  var dayDiff = (target - jan4) / 86400000;    
  var weekNr = 1 + Math.ceil(dayDiff / 7);    
 
  return weekNr;    
 
}










































function horas(msec)
{

    // var hh = Math.floor(msec / 1000 / 60 / 60);
    // msec -= hh * 1000 * 60 * 60;
    // var mm = Math.floor(msec / 1000 / 60);
    // msec -= mm * 1000 * 60;
    // var ss = Math.floor(msec / 1000);
    // msec -= ss * 1000;


    var h=Math.floor(msec / 1000 / 60 / 60);
    msec -= h * 1000 * 60 * 60;
    var horas=h>0?h+"horas ":"";

    var m=Math.floor(msec / 1000 / 60);
    msec -= m * 1000 * 60;
    var minutos=m>0?m+" minutos ":"";

    var s=Math.floor(msec / 1000);
    var segundos=s>0?s+" segundos ":"";

  

  
 
    return "  "+horas+minutos+segundos;
}

//1 500000
var interval;
var ultimaPausa=0;
var intervaloMensaje;
doIt();
function doIt()
{
    rl.question("", function(answer) {
        /*  r-run p-pause s-stop  f:fuck  */
        switch(answer)
        {

            case "c":
                console.log('r-run  p-pause s-stop  f:fuck');
                break;
            case "r":
                if(!isDoingSomething(isWorking,"work")) 
                { if(timeTomatl!=0)
                {
                    respaldoTomatl=timeTomatl;
                    timeTomatl=now();
                    startInterval(1500000-(now()-ultimaPausa));
                    isTomatl=true;
                }
                    pausa=pausa+=(now()-ultimaPausa);
                    isWorking=true;
                    isPaused=false;
                    console.log(faceS('wakeup'));
                    console.log('\n---------- working!! ---------')
                }
                break;
            case "p":
                if(!isDoingSomething(isPaused,"pause")) {
                    if(isTomatl)
                    {
                        timeTomatl=now()-timeTomatl;
                        console.log(timeTomatl+" en pausa")
                        interval=null;
                        isTomatl=false;
                    }
                    isWorking=false;
                    isPaused=true;

                    pausaCounter++;
                    ultimaPausa=now();
                    running=running==0?now()-inicio:((now()-inicio)-pausa);
                    console.log(face('sleeping'));
                    console.log('\n---------- Pause actived ---------')
                }
                break;
            case "fi":
                if(isPaused && pausa==0)
                {
                    pausa=pausa+=(now()-ultimaPausa);
                }

                var tp=pausa!=inicio?pausa:0;
                var cadenaPausa=tp>0?' Tiempo en pausa'+horas(tp):"";
                var cadenaTomatl;

                if(tp>0 && isPaused)
                {  cadenaTomatl=timeTomatl!=0?"    Tomatl: "+horas(timeTomatl):"";
                    console.log(timeTomatl+" en i")
                
}                else
                    cadenaTomatl=timeTomatl!=0?"    Tomatl: "+horas((now()-timeTomatl)+respaldoTomatl):"";
                var whatIsDoing ="    now: ";
                if(isPaused)
                    whatIsDoing+="paused";
                else if(isWorking)
                    if(isTomatl)
                        whatIsDoing+="working and tomatl";
                    else
                        whatIsDoing+="working";


                console.log(timeTomatl);
                console.log("------------------------------------------------");
                console.log('***Tiempo transcurrido: '+horas(now()-inicio)+"\n");
                console.log('  - Pausas: '+pausaCounter+cadenaPausa);
                running=running==0?now()-inicio:((now()-inicio)-pausa);
                console.log('  +working: '+horas(running));
                console.log(cadenaTomatl?cadenaTomatl+' -  n: '+daCounter:"");
                console.log(whatIsDoing);
                console.log("------------------------------------------------")

                break;
                case "i":
                if(isPaused && pausa==0)
                {
                    pausa=pausa+=(now()-ultimaPausa);
                }

                var tp=pausa!=inicio?pausa:0;
                var cadenaPausa=tp>0?' Tiempo en pausa'+horas(tp):"";
                var cadenaTomatl;

                if(tp>0 && isPaused)
                {  cadenaTomatl=timeTomatl!=0?"    Tomatl: "+horas(timeTomatl):"";
                    console.log(timeTomatl+" en i")
                
}                else
                    cadenaTomatl=timeTomatl!=0?"    Tomatl: "+horas((now()-timeTomatl)+respaldoTomatl):"";
                var whatIsDoing ="    now: ";
                if(isPaused)
                    whatIsDoing+="paused";
                else if(isWorking)
                    if(isTomatl)
                        whatIsDoing+="working and tomatl";
                    else
                        whatIsDoing+="working";


                // console.log(timeTomatl);
                // console.log("------------------------------------------------");
                // console.log('***Tiempo transcurrido: '+horas(now()-inicio)+"\n");
                // console.log('  - Pausas: '+pausaCounter+cadenaPausa);
                running=running==0?now()-inicio:((now()-inicio)-pausa);
                console.log('  +w: '+horas(running));
                console.log(cadenaTomatl?cadenaTomatl+' -  n: '+daCounter:"");
                // console.log(whatIsDoing);
                // console.log("------------------------------------------------")

                break;
                case "di":
                var noWeek =weekYear(new Date());
                var w=what.what;
                var l=w.length;
                while(l--)
                {
                    if(w[l].w==noWeek)
                    {
                        console.log("   ht: "w[l].history.ht+" hs: "w[l].history.hs+"  h: "w[l].history.h)   
                    }
                }

                break;
            case "1":
                    run1();
            case "0":
                    apagarTomatl();
                    updateStatusT(what.what);
            break;
        case "r25":
    if(intervaloMensaje)
    {intervaloMensaje=null;
        clearInterval(intervaloMensaje);
                
    }
    timeTomatl=now();
    startInterval(1500000);
    isTomatl=true;
    break;
      case "f":
      rl.close();
      return;
      break
      default:
      if(answer)
      {
        var w=what.what;
        var l=w.length;
        while(l--)
        {
            var r=w[l];
            if(r.h.te.toLowerCase()==answer.toLowerCase())
            {
                cActivity=r.t;
                cTask=r.h.te;
                daCounter=0;
                run1();
                break;
            }
        }

      }
      break;

}
  doIt();
});
}


function run1()
{
    daCounter++;
                    timeTomatl=now();//Iniciar
                    startInterval(1500000);
                    isTomatl=true;
            break;
}


function isDoingSomething(thing,Activity)
{
    if(thing){
        console.log("you're on "+Activity);
        return true;
    }

}

function startInterval(tiempo)
{
    var fallo=false;
    try
    {
        //console
        var sfx = require("sfx");
        runTomatl(function(){ sfx.random();},tiempo,true);
    }
    catch(e)
    {
        fallo=true;
    }

    if(fallo)
    {
        /*
      runTomatl(function(){ 
        var open = require("open");
        open("http://www.google.com");
      },tiempo,false);
        */
        
        runTomatl(function(){var exec = require('child_process').exec;   exec('C:\\Rios\\b.exe');},tiempo,true);
    }
   
}

function runTomatl (f,tiempo,ejecutarIntervalo) {
   interval=setInterval(function(){
                  if(ejecutarIntervalo)
                      {
/*                        f();
                        console.log(tiempo);*/
                        intervaloMensaje=setInterval(f, 3000); 
                        //console.log (JSON.stringify(intervaloMensaje,null,4));
                      }
                  else
                      f();
                  isTomatl=false;
                 // apagarTomatl();

        }, tiempo);
}

function apagarTomatl()
{
    clearInterval(interval);
    interval=null;
    timeTomatl=0;
    // console.log("finished");
    clearInterval(intervaloMensaje);
    intervaloMensaje=null;
    isTomatl=false;
}

function now()
{
    return new Date().getTime();
}

function imprime () {
    console.log("running"+running);
    console.log("running"+running);

    console.log("running"+running);

}

function face(tipo)
{
    var f=(tipo=="wakeup")?wakeUp:sleeping;

    var n=Math.floor((Math.random() * 10) + 1);
    while(n>f.length){
        var n=Math.floor((Math.random() * 10) + 1);
    }   
    var smile=f[n];
    if (!smile || smile.toLowerCase().indexOf('nan') !=-1
        ) {console.log("tipo: "+tipo+" n: "+n);
    };
    return "\n"+smile;

}



