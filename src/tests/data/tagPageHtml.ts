export const data = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="https://hackernoon.com/favicon.png" />
    <link rel="canonical" href="https://hackernoon.com/tagged/coding">
    <link rel="icon" type="image/png" href="/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>coding - Hacker Noon</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-6jHF7Z3XI3fF4XZixAuSu0gGKrXwoX/w3uFPxC56OtjChio7wtTGJWRW53Nhx6Ev"
          crossorigin="anonymous">
    <link rel="stylesheet" href="/base.css" />
    <link href="/tagged.css" rel="stylesheet">
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
          <a href="https://hackernoon.com" class="logo"><img src="https://hackernoon.com/Devimg/logo-hn.png"/><img src="https://hackernoon.com/Devimg/hn-logo.png" class="mobile"/></a>
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

            <div
              class="darkmode"
              @click="darkMode = !darkMode"
              :class="darkMode ? 'dark' : 'light'"
            >
              <i class="light fas fa-sun"></i>
              <i class="dark fas fa-moon"></i>
            </div>
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

      <div class="more">
        <div class="divider-title">
          <h1 class="more-heading">#coding</h1>
        </div>
        
        <div>
          <p class="microCopy"><span class="bold">100</span> stories in this tag</p>
        </div>
        


        
        <div class="more-content">

              <a class="tag" href="https://hackernoon.com/tagged/coding">#Coding</a>
              
            </div>
            <div class="bio">
              <div class="flex">
                
                <div class="avatar" style="background-image: url(https://hackernoon.com/Devimg/story-image-default.png)"></div>
                
                <div>
                  
                  <a href="/@robisenberg" class="name">Rob Isenberg</a>
                  
                  <div class="published">January 21</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="story-card">
            <div class="excerpt">
              <div class="title">
                <a href="/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4">Top 5 Object Oriented Programming and Design Courses for Programmers</a>
              </div>
            </div>
            <div>
              <a href="/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4">
                <div class="img" style="background-image: url('https://hackernoon.com/hn-images/1*EANgU23Sdyk84Z4PjjAfRg.gif')"></div>
              </a>

              
          

          <div class="story-spacer"></div>
          <div class="story-spacer"></div>
        </div>
        
      </div>

      <div class="story-card">
      <div class="excerpt">
        <div class="title">
          <a href="/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4">Top 5 Object Oriented Programming and Design Courses for Programmers</a>
        </div>
      </div>
      <div>
        <a href="/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4">
          <div class="img" style="background-image: url('https://hackernoon.com/hn-images/1*EANgU23Sdyk84Z4PjjAfRg.gif')"></div>
        </a>

        
    

    <div class="story-spacer"></div>
    <div class="story-spacer"></div>
  </div>
  
</div>

      <div id="subscribe-embed">
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
            <img class="signup-image" src="https://ucarecdn.com/57662ddc-da7c-407b-afcb-cb45184b2705/" alt="" />
          <form action="https://hackernoon.us19.list-manage.com/subscribe/post?u=b48b0ec2173fecf2586c00e80&amp;id=fa796741e6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div class="subscribe-header">
              <h2>Hackernoon Newsletter curates great stories by real tech professionals</h2>
                <p>Get solid gold sent to your inbox. Every week!</p>
                </div>
          <div class="mc-field-group">
          </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email Address *">
          </div>
          <div class="fields-group">
            <div class="mc-field-group">
            <input type="text" value="" name="MMERGE1" class="" id="mce-MMERGE1" placeholder="First Name">
          </div>
          <div class="mc-field-group">
            <input type="text" value="" name="MMERGE2" class="" id="mce-MMERGE2" placeholder="Last Name">
          </div>
                </div>
          <div class="mc-field-group input-group topics-list">
              <strong>Topics of interest </strong>
              <ul><li class="checkbox"><input checked type="checkbox" value="1" name="group[3757][1]" id="mce-group[3757]-3757-0"><label for="mce-group[3757]-3757-0">Software Development</label></li>
          <li class="checkbox"><input checked type="checkbox" value="2" name="group[3757][2]" id="mce-group[3757]-3757-1"><label for="mce-group[3757]-3757-1">Blockchain Crypto</label></li>
          <li class="checkbox"><input checked type="checkbox" value="4" name="group[3757][4]" id="mce-group[3757]-3757-2"><label for="mce-group[3757]-3757-2">General Tech</label></li>
          <li class="checkbox"><input checked type="checkbox" value="8" name="group[3757][8]" id="mce-group[3757]-3757-3"><label for="mce-group[3757]-3757-3">Best of Hacker Noon</label></li>
          </ul>
          </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b48b0ec2173fecf2586c00e80_fa796741e6" tabindex="-1" value=""></div>
              <div class="submit-btn"><input type="submit" value="Get great stories by email" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
          </form>
          </div>
          <!--End mc_embed_signup-->
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

    <script src="/interact.js"></script>
    <script>window.upsettings = {'api_key': '24b4421e-81ec-0b84b6a2'}</script><script>(function(){var w=window;var up=w.Upscribe;if(typeof up==="function"){up('reattach_activator');up('update',upsettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Upscribe=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://upscri.be/js/snippet.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if( w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-65623566-4"></script>
    <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());

     gtag('config', 'UA-65623566-4', { 'optimize_id': 'GTM-NR267TL'});
    </script>
    <script src="/subscribeform.js"></script>
    <script async src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
  </body>
</html>
`