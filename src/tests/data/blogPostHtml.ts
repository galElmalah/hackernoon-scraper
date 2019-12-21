export const data = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="icon" type="image/png" href="https://hackernoon.com/favicon.png" />
  <link rel="canonical" href="https://hackernoon.com/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4">
  <link rel="icon" type="image/png" href="favicon.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Top 5 Object Oriented Programming and Design Courses for Programmers - By Javin Paul</title>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@hackernoon" />
  
  <meta name="twitter:creator" content="@javinpaul" />
  
  <meta property="og:url" content="https://hackernoon.com/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4" />
  <meta property="og:title" content="Top 5 Object Oriented Programming and Design Courses for Programmers" />
  
  <meta property="og:image" content="https://hackernoon.com/hn-images/1*EANgU23Sdyk84Z4PjjAfRg.gif" />
  

  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-6jHF7Z3XI3fF4XZixAuSu0gGKrXwoX/w3uFPxC56OtjChio7wtTGJWRW53Nhx6Ev"
        crossorigin="anonymous">
  <link href="/base.css" rel="stylesheet">
  <link href="story.css" rel="stylesheet">
  <link href="prism.css" rel="stylesheet">
  <link href="/subscribe-form.css" rel="stylesheet">

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
  <script src="/content.js"></script>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WGQVQ44');</script>
  <!-- End Google Tag Manager -->
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGQVQ44"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <div id="root">
    <header id="header">
      <nav>
        <a href="https://hackernoon.com"><img src="/Devimg/logo-hn.png" height="40" class="logo"/></a>
        <div class="desktop-nav">
          <div class="spacer"></div>
          <div class="search-container" v-bind:class="{ active: searchFocus }">
            <input ref="search" class="search-input" v-model="search" @keyup.enter="submitSearch" @blur="searchFocus=false" />
            <i class="fas fa-search" @mousedown.stop.prevent="submitSearch"></i>
          </div>
          <a href="https://twitter.com/hackernoon" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/hackernoon" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/hackernoon" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="#subscribe-embed"><button class="outline">Subscribe</button></a>
          <span v-cloak v-if="user && userLoaded">
            <a :href="profileLink"><img :src="profileImage" class="profile" /></a>
          </span>
          <span v-cloak v-if="!user && userLoaded">
            <a :href="loginLink"><button class="outline">Get Started</button></a>
          </span>
        </div>
      </nav>
    </header>

    <div id="top">
      <button class="mobile-menu-toggle" :class="{ 'mobile-open': mobileMenuOpen }" @click="toggleMobileMenu"><i class="fas fa-bars"></i></button>
      <div class="subnav" :class="{ 'mobile-open': mobileMenuOpen }" @mouseleave="!mobileMenuOpen && closeNav()" v-cloak v-if="nav">
        <div class="mobile-back" :class="{ 'mobile-open': (mobileMenuOpen && activeNav !== '') }">
          <button @click="activeNav = ''"><i class="fas fa-arrow-left"></i></button>
        </div>
        <a v-for="category in nav" :href="category.href"
           :class="{ sponsor: category.sponsor }"
           @mouseover="navHover(category, $event)"
           @click="navClick(category, $event)">
          {{category.text}}
        </a>

        <div class="dropdown" v-bind:class="{ active: activeNav!=='' }" @mouseover="closeNavReset">
          <div class="category" v-for="category in nav" :key="category.name">
            <div class="section" v-for="(section, idx) in category.sections" :key="idx" :class="{ active: activeNav === category.name }">
              <div class="heading">
                <div class="line"></div>
                <a :href="section.heading.href">{{section.heading.text}}</a>
              </div>

              <ul class="links">
                <li v-for="(link, linkIdx) in section.links" :key="linkIdx">
                  <a :href="link.href">{{link.text}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="ads">
        <a v-cloak v-if="ad" class="sponsor" @click="recordAdClick" :href="ad.link" target="_blank">
          <img class="image" :src="ad.image" :alt="ad.companyName" />
          {{ad.text}}
        </a>
      </div>
    </div>

    <div class="story story-container">
      
      <div class="author">
        <div class="avatar" style="background-image: url('https://hackernoon.com/archive-avatars/javinpaul')"></div>
        <div class="name">
          <strong><a href="/@javinpaul">Javin Paul</a></strong>
          
          <p>I am Java programmer, blogger  on http://javarevisited.blogspot.com and http://java67.com</p>
          
          <div class="links">
            
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/javinpaul"><i class="fab fa-twitter"></i></a>
            
            
            <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/javinpaul"><i class="fab fa-facebook-square"></i></a>
            
            
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/javinpaul"><i class="fab fa-linkedin"></i></a>
            
            
          </div>
        </div>
      </div>
      

      <h1 class="title">Top 5 Object Oriented Programming and Design Courses for Programmers</h1>
      
      <div class="story-meta">
        <div class="date">September 19th 2018</div>
        <div class="share">
          
          
          
          
          
          
          <a class="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/tweet?text=Top%205%20Object%20Oriented%20Programming%20and%20Design%20Courses%20for%20Programmers&url=https%3A%2F%2Fhackernoon.com%2Ftop-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4&via=javinpaul&hashtags=java,coding,softwaredevelopment"><i class="fab fa-twitter"></i> Tweet This</a>
        </div>
      </div>
      <div class="content" v-pre>
          Programming
        </div>
        
        
        <div class="story-spacer"></div>
      </div>
      
    </div>
  </div>

  <div class="subnav footer">
    <a href="https://www.hackernoon.com"><img class="footer__logo" src="/Devimg/hn-logo.png" width="45" height="45" /></a>
    <div>
      <div class="footer__links">
        <a href="http://help.hackernoon.com">Help</a>
        <a href="https://hackernoon.com/hacker-noon-faqs-with-six-word-answers-aw1ls3z1q">About</a>
        <a href="https://community.hackernoon.com/session/sso?return_path=https%3A%2F%2Fapp.hackernoon.com">Start Writing</a>
        <a class="footer__sponsor" href="http://sponsor.hackernoon.com">Sponsor:</a>
        <a class="footer__sponsor-type" href="https://sponsor.hackernoon.com/#brandasauthor">Brand-as-Author</a>
        <a class="footer__sponsor-type" href="https://sponsor.hackernoon.com/#billboard">Sitewide Billboard</a>
      </div>
      <div class="footer__privacy-links">
        <a href="mailto:support@hackernoon.com">Contact Us</a>
        <a href="http://privacy.hackernoon.com">Privacy</a>
        <a href="http://terms.hackernoon.com">Terms</a>
      </div>
    </div>
    <div>
      <a href="https://twitter.com/hackernoon" rel="noopener noreferrer" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://www.facebook.com/hackernoon" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.linkedin.com/company/hackernoon/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.youtube.com/hackernoon" rel="noopener noreferrer" target="_blank"><i class="fab fa-youtube"></i></a>
    </div>
  </div>

  <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-firestore.js"></script>
  <script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjRAcAgsxlffnuZNIr4zOGaIsEKKEaJCg",
    authDomain: "hackernoon-app.firebaseapp.com",
    databaseURL: "https://hackernoon-app.firebaseio.com",
    projectId: "hackernoon-app",
    storageBucket: "hackernoon-app.appspot.com",
    messagingSenderId: "521962009898"
  };
  firebase.initializeApp(config);
  </script>
  <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>

  <script src="interact-archive.js"></script>
  <script src="prism.js"></script>
  <script>window.upsettings = {'api_key': '24b4421e-81ec-0b84b6a2'}</script><script>(function(){var w=window;var up=w.Upscribe;if(typeof up==="function"){up('reattach_activator');up('update',upsettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Upscribe=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://upscri.be/js/snippet.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if( w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-65623566-4"></script>
  <script>
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());

   gtag('config', 'UA-65623566-4', { 'optimize_id': 'GTM-NR267TL'});
  </script>
  <script async src="/services.js"></script>
  <script src="/subscribeform.js"></script>
  <script async src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
</body>
</html>
`