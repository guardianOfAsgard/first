var inicio = now();
var pausa = 0;
var running = 0;
var pausaCounter = 0;
var wakeUp = ['{{|└(>o< )┘|}}', 'ｏ( ><)o', '（｀・∧・´）ノ●', '(＃｀д´)ﾉ', '＼(`O´）／θ', 'Σ(▼□▼メ)', '(ノಠ益ಠ)ノ', 'ᕙ(⇀‸↼‶)ᕗ', 's(・｀ヘ´・;)ゞ', 'o( -`д´-｡)o', 'o( -`д´-｡)o', '(屮ಠ益ಠ)屮', '"(yಠ,ಠ)y"', 'ლ(ಠ益ಠლ)', 'ヾ(   ￣Ｏ￣)ﾂ', '＿φ(◎‿ ◎ )', '＿φ(°-°=)', '＿φ(．．;)', '＿〆(。_ 。#)', '（＾～＾）ノ', '＼(o￣∇￣o)/', '"""\\(° ∇°)/"""', 'ಠ_ಠ', '凸 (｀0´)凸', '凸(｀⌒´メ)凸', 'w(°ｏ°)w', 'L(・o・)」', '【• ▂ •】What?', '（◎ . ◎）', '??(ノ;´Д`)ノ'];
var sleeping = ['(。￣-￣)    ℤℤℤ', '(ー。ー) zzz', '［(－_－)］zzz', '★☽(。￣-￣)', '(∪｡∪)｡｡｡zzz', '(_  _)zZZ', '              z\n' + '             z\n' + '              Z\n' + '  （ー  一）..Zz'];
var isTomatl = false;
var timeTomatl = 0;
var isWorking = true;
var isPaused = false;
var respaldoTomatl = 0;
var aTomatl = [],
    aPauses = [];
var daCounter = 0;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var what = require('./what.js');
var cTask = "";
var cActivity = "";

//1 150000000
var interval;
var ultimaPausa = 0;
var intervaloMensaje;
var util = require('util');
var exec = require('child_process').exec;

var mt=new masterOfTomatl();
var printer=new thePrinter();
var indices=new indicesManager();
var wm=new weeksManager();
var cb=new chocolateBox();
var file=new files();

doIt();

function doIt() {
    rl.question("", function(answer) {
    var timeToClean = 500;
        switch (answer) {
            case "c":
                console.log('r-run  p-pause s-stop  f:fuck');
                break;
            // case "r":
            //     if (!isDoingSomething(isWorking, "work")) {
            //         if (timeTomatl != 0) {
            //             respaldoTomatl = timeTomatl;
            //             timeTomatl = now();
            //             startInterval(1500000 - (now() - ultimaPausa));
            //             isTomatl = true;
            //         }
            //         pausa = pausa += (now() - ultimaPausa);
            //         isWorking = true;
            //         isPaused = false;
            //         console.log(faceS('wakeup'));
            //         console.log('\n---------- working!! ---------')
            //     }
            // //     break;
            // case "p":
            //     if (!isDoingSomething(isPaused, "pause")) {
            //         if (isTomatl) {
            //             timeTomatl = now() - timeTomatl;
            //             console.log(timeTomatl + " en pausa")
            //             interval = null;
            //             isTomatl = false;
            //         }
            //         isWorking = false;
            //         isPaused = true;

            //         pausaCounter++;
            //         ultimaPausa = now();
            //         running = running == 0 ? now() - inicio : ((now() - inicio) - pausa);
            //         console.log(face('sleeping'));
            //         console.log('\n---------- Pause actived ---------')
            //     }
                break;
            case "fi":
                printer.printFi();
                timeToClean = 0;

                break;
            case "i":
                printer.printI();
                timeToClean = 1500;

                break;
            case "di":
                console.log(infoTomatl());
                break;
            case "1":
                run1();
            case "0":
                wm.updateStatusT(what.what);
                mt.apagarTomatl();
                break;
            // case "r25":
            //     if (intervaloMensaje) {
            //         intervaloMensaje = null;
            //         clearInterval(intervaloMensaje);

            //     }
            //     timeTomatl = now();
            //     startInterval(1500000);
            //     isTomatl = true;
            //     break;
            case "f":
                rl.close();
                return;
                break
            case "prior":
                var plainActivities = printer.activitiesByPriority();
                plainActivities.forEach(function(e) {
                    if (e.a) console.log(e.p + "- a: " + e.a);
                    if (e.t) console.log("      " + e.p + "- t: " + e.t);
                });
                timeToClean = 0;
                break;
            case "ev":
               
                timeToClean = 0;
                break;
            default:
                if (answer) {
                    var activities = what.what;
                    var st = mt.runSpecificTask(answer);
                    if (!st.hasWeeks) {
                        wm.addWeek(activities, answer);
                        st = mt.runSpecificTask(answer)
                    }
                    if (!st.taskFound) {
                        console.log(".")
                    }
                }

                break;

        }
        if (timeToClean)
            setTimeout(function() {
                console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
            }, timeToClean);

        doIt();

    });
}

 function now() {return new Date().getTime();}






//===========================================================
function masterOfTomatl() {

    this.apagarTomatl = function() {
        clearInterval(interval);
        interval = null;
        timeTomatl = 0;
        clearInterval(intervaloMensaje);
        intervaloMensaje = null;
        isTomatl = false;
    }


     this.run1=function() {
        daCounter++;
        timeTomatl = now(); //Iniciar
        startInterval(1500000);
        isTomatl = true;
    }


     this.runSpecificTask=function(task) {
        var a = what.what;
        var taskFound = 0;
        var leTask = indices.findIndicesTask(task.toLowerCase());
        var hasWeeks = leTask.hasWeeks;



        if (leTask.task && leTask.hasWeeks) {
            cActivity = a[leTask.indices.iActivity].activity;
            cTask = task;
            taskFound = 1;
            this.run1();
        }
        return {
            hasWeeks: hasWeeks,
            taskFound: taskFound
        };

    }


    //--------------------------------------------
    function startInterval(tiempo) {
        var fallo = false;
        try {
            //console
            var sfx = require("sfx");
            runTomatl(function() {
                sfx.random();
            }, tiempo);
        } catch (e) {
            fallo = true;
        }

        if (fallo) {

            runTomatl(function() {
                var exec = require('child_process').exec;
                exec('C:\\Rios\\b.exe');
            }, tiempo);
        }

    }

    function runTomatl(f, tiempo) {
        interval = setTimeout(
            function() {
                intervaloMensaje = setInterval(f, 3000);
            }, tiempo);
    }


  

    function isHeDoingSomething(thing, Activity) {
        if (thing) {
            console.log("you're on " + Activity);
            return true;
        }

    }

}

//============================================================
function indicesManager() {


    this.findIdices=function(activity, noWeek, date, task) {
        var iActivity = indexByProperty(what.what, "activity", activity);

        var iDay;
        var iTask;
        var iWeek;
        var weFoundIt;

        if (cb.isDefined(iActivity)) {
            var a = what.what[iActivity];
            var w = a.weeks;
            var today = new Date();

            iWeek = indexByProperty(w, "noWeek", noWeek);
            var theTask;
            if (cb.isDefined(iWeek)) {
                var d = w[iWeek].days;
                iDay = indexByProperty(w[iWeek].days, "day", date /*today.toLocaleDateString()*/ );
                if (cb.isDefined(iDay)) {
                    iTask = indexByProperty(d[iDay].tasks, "task", task /*cTask*/ );
                    if (cb.isDefined(iTask)) {
                        weFoundIt = true;

                    }

                }
            }
        }
        return {
            weFoundIt: weFoundIt,
            iWeek: iWeek,
            iDay: iDay,
            iTask: iTask,
            iActivity: iActivity
        };
    }


      //locates the task  on current week and current day
    this.findIndicesTask=function (task) {

        var activities = what.what;
        var la = activities.length - 1;
        var today = new Date();
        var noWeek = wm.numberOfTheWeek(today);
        var todayWithFormat = cb.dateWithFormat(today);
        var found = 0;
        var i;
        while (la--) {
            var a = activities[la];
            var i = this.findIdices(a.activity, noWeek, todayWithFormat, task);
            if (i.weFoundIt) {
                found = 1;
                break;
            }
        }

        return {
            task: found ? a.weeks[i.iWeek].days[i.iDay].tasks[i.iTask] : null,
            hasWeeks: cb.isDefined(i.iWeek),
            indices: i
        };
    }


//------------------------------------------------------
  function indexByProperty(theArray, property, value) {
        if (theArray) {
            var l = theArray.length;
            if (property) {
                while (l--) {
                    if (theArray[l][property] === value) {
                        return l;
                    }
                }
            }
        }
    }


    // function findCurrentIndices() {
    //     var today = new Date();
    //     var noWeekYear = numberOfTheWeek(today);
    //     return findIdices(cActivity, noWeekYear, dateWithFormat(today), cTask);
    // }

    // function iActivity(w) {
    //     if (cActivity && cTask) {
    //         var l = w.length;
    //         while (l--) {
    //             if (w[l].tg == cActivity) {
    //                 return w[l];
    //             }
    //         }
    //     }
    // }



  

  
}


// ==================================================================
function weeksManager() {

    this.numberOfTheWeek=function(d) {
        var target = new Date(d.valueOf());
        var dayNr = (d.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var jan4 = new Date(target.getFullYear(), 0, 4);
        var dayDiff = (target - jan4) / 86400000;
        var weekNr = 1 + Math.ceil(dayDiff / 7);
        return weekNr;
    }


    this.addWeek=function(a, taskFiresaggregation) {

        //activity iteration
        var la = a.length - 1;
        var found = 0;
        var i;
        var w;
        var ld;
        while (la--) {
            var lw = a[la].weeks.length - 1;
            //loking for the specific task
            w = a[la].weeks[lw];
            ld = a[la].weeks[lw].days.length - 1;
            var d = w.days[ld];
            var noWeek = w.noWeek;
            var i = indices.findIdices(a[la].activity, noWeek, d.day, taskFiresaggregation);

            if (i.weFoundIt) {
                found = 1;
                break;
            }
        }
        if (!found) return;

        var dWeek = cb.cloneObject(w);
        dWeek.noWeek = wm.numberOfTheWeek(new Date());
        var today = new Date();
        ld = w.days.length;
        var newDays = [];
        while (ld--) {

            var day = cb.cloneObject(dWeek.days[ld]);
            day.day = newDayWeek(today, ld);
            var lt = day.tasks.length;
            var newTasks = [];
            while (lt--) {
                var task = cb.cloneObject(day.tasks[lt]);

                task.tomatls = 0;
                newTasks.push(task);
            }
            day.tasks = newTasks;
            newDays.push(day);
        }
        dWeek.days = newDays;
        file.writeActivities("bak.js", a);
        a[la].weeks.push(dWeek);
        file.writeActivities('what.js', a);
    }


     this.updateStatusT=function(a) {
        if (isTomatl) {
            file.writeActivities("bak.js", a);
            var leTask = indices.findIndicesTask(cTask);
            if (leTask.task) {
                var t = leTask.task;
                t.tomatls++;
            }
            file.writeActivities('what.js', a);
        }
    }




    function newDayWeek(f, days) {
        var result = new Date(f);
        result.setDate(result.getDate() + days);
        return cb.dateWithFormat(result);
    }


   



}




function chocolateBox() {
    // ==========================================
    //Particular
    this. dateWithFormat=function(rightNow) {
        return rightNow.toISOString().slice(0, 10).replace(/-/g, "-");
    }


    //==========================================
    //General
    this.addDays = function(date, days) {
        var dat = new Date(date.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
    }

    this.cloneObject = function(obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    }



    this.isDefined =function(thing) {
        return thing != null && thing != undefined;
    }


}


function files() {

    this.writeActivities=function(nameFile, a) {
        var leJson = JSON.stringify(a, null, 4);
        var ft = 'exports.what=' + leJson + ';';
        this.creaArchivo(nameFile, ft);
    }


    this. creaArchivo=function(nameFile, txt) {

        var fs = require('fs');
        fs.writeFile(nameFile, txt, function(err) {
            if (err) {
                return console.log(err);
            }

            //console.log("The file was saved!");
        });

    }

}


//gruop the logic to print all the messages
function thePrinter() {

    this.printEvolucion=function(d){
        // data
        var h=new Date();
        var activity=d.activity?d.activity:cActivity;
        var task=d.task?d.task:cTask;
        var month=d.month?d.month:h.getMonth();
        var week=d.week?d.week:cActivity;

        // weeks
         var plainActivities = activitiesByPriority();
         var weeksM=weeksOfMonth(month);
         var aDatesWeeks=[];

         weeksM.forEach(function(week){
            var fDate=new Date(h.getFullYear(),month,1);
            if(week)
                aDatesWeeks.concat( datesOfWeek(fDate,week));
         });




//semana,month
                plainActivities.forEach / (function(e) {
                    if (e.a) console.log(e.p + "- a: " + e.a);
                    if (e.t) {
                        var leTask = indices.findIndicesTask(e.t);
                        if (leTask.task) {
                            var t = leTask.task;
                            t.tomatls++;
                            console.log("      " + e.p + "- t: " + e.t + " tPerWeek: " + t.tPerWeek + " tPerDay: " + t.tPerDay + " t: " + t.tomatls);
                        }
                    }
                });
    }



     //returns an activity plain list order by priority
    this.activitiesByPriority=function() {

        var plainActivities = [];
        var activities = what.what;

        var minMax = function(leArray, p) {
            var xVals = leArray.map(function(val) {
                return val[p];
            });
            var min = Math.min.apply(Math, xVals);
            var max = Math.max.apply(Math, xVals);
            return {
                min: min,
                max: max
            }
        }

        var printNext = function(v, p, min, printTask) {
            var lv = v.length;
            while (lv--) {
                var i = v[lv];

                if (i[p] == min) {

                    if (i.activity) {
                        plainActivities.push({
                            "p": i[p],
                            a: i.activity
                        });

                    }
                    if (printTask) {
                        var t = i.weeks[0].days[0].tasks;
                        printCicle(t, "priority", false);

                    }
                    if (i.task) {
                        plainActivities.push({
                            "p": i[p],
                            t: i.task
                        });
                    }
                    break;
                }
            }
            return printTask ? min + 1 : +(min + .1).toFixed(1);
        }

        var printCicle = function(leArray, p, printTask) {
            var mm = minMax(leArray, p);
            while (mm.min <= mm.max) {
                mm.min = printNext(leArray, p, mm.min, printTask);
            }
        }

        printCicle(activities, "higherPriority", true);
        return plainActivities;
    }



     this.infoTomatl=function() {

        var t = indices.findIndicesTask(cTask);
        if (t.task) {
            var a = what.what;
            var i = t.indices;
            var cWeek = wm.numberOfTheWeek(new Date());
            var today = new Date();
            var namesDays = ["su", "m", "tu", "w", "th", "f", "sa"];
            var cWeek = wm.numberOfTheWeek(today);
            var cadena = "\n     week: " + cWeek;
            cadena += "\n     date: " + a[i.iActivity].weeks[i.iWeek].days[i.iDay].day + ' - ' + namesDays[today.getDay()];
            cadena += "\n     tsk:'" + cActivity + "' -> " + cTask + " txw: " + t.task.tPerWeek + "  nt:" + t.task.tomatls;
            return cadena;
        }
    }

    //function 

    //returns the four weeks correspondig to a month
    function weeksOfMonth(month) {
        var today = new Date();
        var y = today.getFullYear();
        var firstWeek;
        switch (month) {
            case 1:
                firstWeek = new Date(y, month, 1);
                break;
            case 2:
                firstWeek = new Date(y, month, 1);
                break;
            case 3:
                firstWeek = new Date(y, month, 1);
                break;
            case 4:
                firstWeek = new Date(y, month, 1);
                break;
            case 5:
                firstWeek = new Date(y, month, 1);
                break;
            case 6:
                firstWeek = new Date(y, month, 1);
                break;
            case 7:
                firstWeek = new Date(y, month, 1);
                break;
            case 8:
                firstWeek = new Date(y, month, 1);
                break;
            case 9:
                firstWeek = new Date(y, month, 1);
                break;
            case 10:
                firstWeek = new Date(y, month, 1);
                break;
            case 11:
                firstWeek = new Date(y, month, 1);
                break;
            case 12:
                firstWeek = new Date(y, month, 1);
                break;
        }
        var nWeek = numberOfTheWeek(firstWeek);
        return [nWeek, nWeek + 1, nWeek + 2, nWeek + 3];
    }

    //returns the 7 dates correspondig to a week
    function datesOfWeek(firstDateMonth, nWeek) {
        function daysInMonth(month, year) {
            return new Date(year, month, 0).getDate();
        }


        var aDays = [];
        var dates = [];
        var days = 7 * nWeek /*restantes*/ ;
        var firstDateWeek = (new Date(firstDateMonth.valueOf()).getDate()) + days;

        var now = new Date();
        var daysInWeek=days > 28 ? ((daysInMonth(now.getMonth, now.getFullYear())) - 28) + 7:days;
        daysInWeek++;
        for (var i = 1; i < daysInWeek; i++) {
            var newDate = new Date(firstDateWeek.valueOf());
            aDays.push(cb.dateWithFormat(newDate.setDate(newDate.getDate() + i)));
        };

        return aDays;
    }

   

    //prints a expression when the app has been paused or restarted
    function printExpression(tipo) {
        var f = (tipo == "wakeup") ? wakeUp : sleeping;

        var n = Math.floor((Math.random() * 10) + 1);
        while (n > f.length) {
            var n = Math.floor((Math.random() * 10) + 1);
        }
        var smile = f[n];
        if (!smile || smile.toLowerCase().indexOf('nan') != -1) {
            console.log("tipo: " + tipo + " n: " + n);
        };
        return "\n" + smile;

    }

    this.printI=function()
    {
          if (isPaused && pausa == 0) {
                    pausa = pausa += (now() - ultimaPausa);
                }

                var tp = pausa != inicio ? pausa : 0;
                var cadenaPausa = tp > 0 ? ' Tiempo en pausa' + horas(tp) : "";
                var cadenaTomatl;

                if (tp > 0 && isPaused) {
                    cadenaTomatl = timeTomatl != 0 ? "Tomatl: " + horas(timeTomatl) : "";
                    console.log(timeTomatl + " en i")

                } else
                    cadenaTomatl = timeTomatl != 0 ? "Tomatl: " + horas((now() - timeTomatl) + respaldoTomatl) : "";
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
                console.log('w:      ' + horas(running));
                console.log(cadenaTomatl ? cadenaTomatl + ' -  n: ' + daCounter : "");
                // console.log(whatIsDoing);
                // console.log("------------------------------------------------")
    }


    this.printFi=function(){
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
                console.log(this.infoTomatl());
                console.log("------------------------------------------------")
    }


    // ==============================
   
//---------------------------------    
  function horas(msec) {

        var h = Math.floor(msec / 1000 / 60 / 60);
        msec -= h * 1000 * 60 * 60;
        var horas = h > 0 ? h + "horas " : "";

        var m = Math.floor(msec / 1000 / 60);
        msec -= m * 1000 * 60;
        var minutos = m > 0 ? m + " minutos " : "";

        var s = Math.floor(msec / 1000);
        var segundos = s > 0 ? s + " segundos " : "";

        return "  " + horas + minutos + segundos;
    }


}
