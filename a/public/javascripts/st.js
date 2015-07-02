
// ======================================================================
$(function() {
  var sideNav = $('.menu');
  // var topNav = $('.top-nav');
  // var navItems = $("li a", sideNav);
  
  go();
  function go() {
            
      $(function() { setTimeout(collapse, 1000); });

      $('.menu')
        .mouseenter(expand)
        .mouseleave(collapse);

        setFocus();
    
  }
  
  function navItemClicked() {
    // speed up hiding and showing nav (useful on mobile)
    var homeClicked = ($(this).attr("href") === "/");
    // bubble so link handlers happen first
    setTimeout(function() {
      if (homeClicked) {
        $('body').addClass('home');
      }
      else {
        $('body').removeClass('home');
      }
    }, 0);
    // reduces flickering on mobile
    if (homeClicked) {
      sideNav.addClass("white-nav");
    }
  }
  
  function watchPageChanges() {
    $(window).on('url-changed', function() {
      var url = getRelativeUrl();
      if (url === Navigation.lastUrl) { return; }
      
      // updateTopNav(url);
      updateSideNav(url);
      updateWhiteNav();
      
    });
  }
  
  function collapse() {
    // if (isHome() || !collapsableNav) { return; }
    $('body').addClass('nav-collapsed');
  }
  
  function expand() {
    $('body').removeClass('nav-collapsed');
  }
 

//=====================================
// Aggregando propiedad focus

   // var focus=;

function setFocus(){
  // var m=$('#menuItems a').on("click",function(element){
  //     console.log("mamas cacaroto")
  //     var as=$('#menuItems .selected').removeClass("focus");
  //     // if(as.length>0)
  //     // {
  //     //     for (var r in as) {
  //     //         as[r].removeClass("focus");
  //     //     }
  //     // }
  //     element.addClass("focus");
  //   });

  // for(var i in m){
  //   m[i].click(focus);

  // }
}





// //Funcion para asignar evento click a los botones thumbs up, middle, down y asu ves asociarle logica
// //para agregarles efecto cuando estos hallan sido presionados
// function  effectsClickBoton()
// {
//   $(".glyphicon.glyphicon-thumbs-up").forEach(function(element){
//     if(element.is("btn-activated"))
//   });
  
// if( !classie.has( this, activatedClass ) ) {
//           console.log("jajaja");
//           classie.add( this, activatedClass );
//           setTimeout( function() { classie.remove( self, activatedClass ) }, 1000 );
//         }

// }


// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};


// var buttons7Click = Array.prototype.slice.call( document.querySelectorAll( '.btnLikes' ) ),
//     totalButtons7Click = buttons7Click.length;

// console.log(buttons7Click);

      // buttons7Click.forEach( function( el, i ) {
      // console.log("mamas"); el.addEventListener( 'click', activate, false ); } );

      // function activate() {
      //   var self = this, activatedClass = 'btn-activated';

      //   if( classie.has( this, 'btn-7h' ) ) {
      //     // if it is the first of the two btn-7h then activatedClass = 'btn-error';
      //     // if it is the second then activatedClass = 'btn-success'
      //     activatedClass = buttons7Click.indexOf( this ) === totalButtons7Click-2 ? 'btn-error' : 'btn-success';

      //   }
      //   // else if( classie.has( this, 'btn-8g' ) ) {
      //   //   // if it is the first of the two btn-8g then activatedClass = 'btn-success3d';
      //   //   // if it is the second then activatedClass = 'btn-error3d'
      //   //   activatedClass = buttons9Click.indexOf( this ) === totalButtons9Click-2 ? 'btn-success3d' : 'btn-error3d';
      //   // }

      //   if( !classie.has( this, activatedClass ) ) {
      //     console.log("jajaja");
      //     classie.add( this, activatedClass );
      //     setTimeout( function() { classie.remove( self, activatedClass ) }, 100000 );
      //   }
      // }

      // document.querySelector( '.btn-7i' ).addEventListener( 'click', function() {
      //   classie.add( document.querySelector( '#trash-effect' ), 'trash-effect-active' );
      // }, false );




// // transport
// if ( typeof define === 'function' && define.amd ) {
//   // AMD
//   define( classie );
// } else {
//   // browser global
//   window.classie = classie;
// }



}




);



