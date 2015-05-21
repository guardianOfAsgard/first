
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

var what=require('./what.js');


var cTask="";
var cActivity="";

var iday




function findIdices(activity)
{
    var a=what.what[cActivity].weeks;
    var today=new Date();
    var noWeekYear=weekNumberYear(today);
    var weFoundIt;
    var iday;
    var iTask;
    var iWeek=indexByProperty(a,"noWeek",noWeekYear);
    var theTask;
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







function findIndicesTask(activity)
{
    var a=what.what[cActivity].weeks;
    // var today=new Date();
    // var noWeekYear=weekNumberYear(today);
    // var weFoundIt;
    // var iday;
    // var iTask;
    // var iWeek=indexByProperty(a,"noWeek",noWeekYear);
    // var theTask;
    // if(indexWeek)
    // {
    //     iday=indexByProperty(a[iWeek].days,"day",today.toLocaleDateString());
    //     if(iday)
    //     {
    //         iTask=indexByProperty(a[iWeek].days[iday].tasks,"task",cTask);
    //         weFoundIt=true;
    //         return a[iWeek].days[iday].tasks[lTask];
    //     }    
    // }
    var i=findIdices(activity)
    if(i && isDefined(i.iWeek) && isDefined(i.iday))
    {
        return a[i.iWeek].days[i.iday].tasks[i.iTask];
    }

    //return {weFoundIt:weFoundIt,iWeek:iWeek,iday:iday,iTask:iTask};
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
    //ciclo actividades
    dWeek=a.weeks[i.iWeek-1];//.days[0].tasks;
    dWeek.noWeek=weekNumberYear(new Date());
    var ld=dWeek.days.length;
    var today=new Date();
    while(ld--)
    {
        dWeek.days[ld].day=neeDayWeek(today,ld);
        var lt=dWeek.days[ld].tasks.length;
        while(lt)
        {
            dWeek[ld].tasks[lt].totalTomatl=0;
            dWeek[ld].tasks[lt].noTomatl=0;
        }
    }
    a.weeks.push(dWeek);
}

function newDayWeek(f,days)
{
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toLocaleDateString();
}


function updateStatusT() {

    creaArchivo(w, "bak.js")
    var a = what.what[cActivity].weeks;
                          
    var theTask = findIndicesTask(cActivity);
    if (!theTask)
    {
        addWeek(a);
        theTask = findIndicesTask(cActivity);
    }
    theTask.noTomatl++;

    creaArchivo(w, "what.js");
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










function creaArchivo(t,nameFile)
{
    fs.writeFile( t , JSON.stringify(objeto,null,3), function(err) {
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




















function infoTomatl()
{
    var i=findIdices(cActivity)
    var theTask;
    var theWeek;
    var theDay;
    var a=what.what[cActivity].weeks;
    if(i && isDefined(i.iWeek) && isDefined(i.iday))
    {
        theWeek=a[i.iWeek];
        theDay=a[i.iWeek].days[i.iday];
        theTask = a[i.iWeek].days[i.iday].tasks[i.iTask];
    }
        
    var cWeek=weekNumberYear(new Date());
    var today=new Date();
    var namesDays = ["su","m","tu","w","th","f","sa"];
    var cWeek = weekNumberYear(today);
    var cadena = "\n     w: " + cWeek;
    cadena += " d:" + namesDays[today.getDay()] + " " + theDay.day;
    cadena += " tsk:" + cActivity + " - " + cTask + " txw" + theTask.noTomatlWeek + "  nt:" + theTask.noTomatl;
    return cadena;
}



//1 500000
var interval;
var ultimaPausa=0;
var intervaloMensaje;
doIt();

function doIt() {
    rl.question("", function (answer) {

        switch (answer) {
            case "c":
                console.log('r-run  p-pause s-stop  f:fuck');
                break;
            case "r":
                if (!isDoingSomething(isWorking, "work")) {
                    if (timeTomatl != 0) {
                        respaldoTomatl = timeTomatl;
                        timeTomatl = now();
                        startInterval(1500000 - (now() - ultimaPausa));
                        isTomatl = true;
                    }
                    pausa = pausa += (now() - ultimaPausa);
                    isWorking = true;
                    isPaused = false;
                    console.log(faceS('wakeup'));
                    console.log('\n---------- working!! ---------')
                }
                break;
            case "p":
                if (!isDoingSomething(isPaused, "pause")) {
                    if (isTomatl) {
                        timeTomatl = now() - timeTomatl;
                        console.log(timeTomatl + " en pausa")
                        interval = null;
                        isTomatl = false;
                    }
                    isWorking = false;
                    isPaused = true;

                    pausaCounter++;
                    ultimaPausa = now();
                    running = running == 0 ? now() - inicio : ((now() - inicio) - pausa);
                    console.log(face('sleeping'));
                    console.log('\n---------- Pause actived ---------')
                }
                break;
            case "fi":
                if (isPaused && pausa == 0) {
                    pausa = pausa += (now() - ultimaPausa);
                }

                var tp = pausa != inicio ? pausa : 0;
                var cadenaPausa = tp > 0 ? ' Tiempo en pausa' + horas(tp) : "";
                var cadenaTomatl;

                if (tp > 0 && isPaused) {
                    cadenaTomatl = timeTomatl != 0 ? "    Tomatl: " + horas(timeTomatl) : "";
                    console.log(timeTomatl + " en i")

                } else
                    cadenaTomatl = timeTomatl != 0 ? "    Tomatl: " + horas((now() - timeTomatl) + respaldoTomatl) : "";
                var whatIsDoing = "    now: ";
                if (isPaused)
                    whatIsDoing += "paused";
                else if (isWorking)
                    if (isTomatl)
                        whatIsDoing += "working and tomatl";
                    else
                        whatIsDoing += "working";


                console.log(timeTomatl);
                console.log("------------------------------------------------");
                console.log('***Tiempo transcurrido: ' + horas(now() - inicio) + "\n");
                console.log('  - Pausas: ' + pausaCounter + cadenaPausa);
                running = running == 0 ? now() - inicio : ((now() - inicio) - pausa);
                console.log('  +working: ' + horas(running));
                console.log(cadenaTomatl ? cadenaTomatl + ' -  n: ' + daCounter : "");

                console.log(whatIsDoing);
                console.log(infoTomatl());
                console.log("------------------------------------------------")

                break;
            case "i":
                if (isPaused && pausa == 0) {
                    pausa = pausa += (now() - ultimaPausa);
                }

                var tp = pausa != inicio ? pausa : 0;
                var cadenaPausa = tp > 0 ? ' Tiempo en pausa' + horas(tp) : "";
                var cadenaTomatl;

                if (tp > 0 && isPaused) {
                    cadenaTomatl = timeTomatl != 0 ? "    Tomatl: " + horas(timeTomatl) : "";
                    console.log(timeTomatl + " en i")

                } else
                    cadenaTomatl = timeTomatl != 0 ? "    Tomatl: " + horas((now() - timeTomatl) + respaldoTomatl) : "";
                var whatIsDoing = "    now: ";
                if (isPaused)
                    whatIsDoing += "paused";
                else if (isWorking)
                    if (isTomatl)
                        whatIsDoing += "working and tomatl";
                    else
                        whatIsDoing += "working";


                // console.log(timeTomatl);
                // console.log("------------------------------------------------");
                // console.log('***Tiempo transcurrido: '+horas(now()-inicio)+"\n");
                // console.log('  - Pausas: '+pausaCounter+cadenaPausa);
                running = running == 0 ? now() - inicio : ((now() - inicio) - pausa);
                console.log('  +w: ' + horas(running));
                console.log(cadenaTomatl ? cadenaTomatl + ' -  n: ' + daCounter : "");
                // console.log(whatIsDoing);
                // console.log("------------------------------------------------")

                break;
            case "di":
                console.log(infoTomatl());
                break;
            case "1":
                run1();
            case "0":
                apagarTomatl();
                updateStatusT(what.what);
                break;
            case "r25":
                if (intervaloMensaje) {
                    intervaloMensaje = null;
                    clearInterval(intervaloMensaje);

                }
                timeTomatl = now();
                startInterval(1500000);
                isTomatl = true;
                break;
            case "f":
                rl.close();
                return;
                break
            default:
                if (answer) {
                   
                    var activities = what.what;
                    var st = runSpecificTask(activities);
                    // console.log(JSON.stringify(st,null,4));

                    if (st.withoutWeeks) {
                        addWeek(activities);
                        st = runSpecificTask(activities)
                    }

                    if (!st.taskFound) {
                        console.log(".")
                    }
                }

                break;

        }
        doIt();

    });
}
    

    function runSpecificTask(activities)
    {
         var today = new Date();
        var nw = weekNumberYear(today);
        var withoutWeeks=1;
        var bueno=0;
        var la = activities.length;
        while (la--) {
            var a=activities[la];
            var lw = a.weeks.length;
            var day = today.toLocaleDateString();
            
            while (lw--) {
                var w = a.weeks[lw];

                if (w.noWeek == nw) {
                    withoutWeeks=0;
                    var ld = w.days.length;
                    while (ld--) {
                        console.log(nw);

                        var d = w.days[ld];
                        if (d.day==day) {
                            var lt=d.tasks.length;

                            while(lt--){
                                var t=d.tasks[lt];
                                if(t.tasks.toLowerCase()==answer.toLowerCase()) 
                                {
                                    cActivity=a.activity;
                                    cTask=answer;
                                    bueno=1;
                                    console.log(JSON.stringify(a,null,4));
                                }
                            }
                        }
                    }
                }
            }
            return {withoutWeeks:withoutWeeks,taskFound:bueno};
        }
}
        function run1()
        {
            daCounter++;
            timeTomatl=now();//Iniciar
            startInterval(1500000);
            isTomatl=true;
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



