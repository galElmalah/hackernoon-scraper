<p>There are a lot of different ways in which you can write CSS for your React applications, I would go as far as to say that you actually have <strong><em>more</em></strong> options for styling React applications than traditional web applications.</p><p><strong>Let&#x2019;s define some of these&#xA0;options:</strong></p><ul><li>Standard CSS</li><li>Inline Styles</li><li>CSS Modules</li><li>CSS-in-JS</li></ul><p>Now let&#x2019;s take a closer look at each one of&#xA0;these.</p><h4><strong>Standard CSS</strong></h4><p>This is the traditional and the most common way of writing CSS. You create a <strong><em>style.css</em></strong> file, add all of your styles inside of it, then import the stylesheet and reference the styles within your JSX via className or id attributes.</p><p>Note that you don&#x2019;t have to limit your styles within a single stylesheet, you can just as well split them into multiple files and place them next to the components which they are supposed to&#xA0;target.</p><p>Also note that you can keep on using your everyday CSS libraries and frameworks such as <strong><em>SASS</em></strong>, <strong><em>LESS</em></strong>, <strong><em>Bootstrap</em></strong>, <strong><em>Semantic UI</em></strong>, etc., as well, React doesn&#x2019;t limit you in any&#xA0;way.</p><h4>Inline Styles</h4><p>Inline styles refer to writing CSS directly inside of HTML markup via the style attribute. In React, using JSX, this looks like&#xA0;this:</p><p>&lt;p style={{color: &quot;red&quot;}}&gt;Hello World&lt;/p&gt;</p><p>Inline styles are probably the most limited approach in terms of styling full blown applications since they cannot make use of all of the CSS features such as <strong><em>pseudo selectors</em></strong>, <strong><em>animations</em></strong> and <strong><em>media&#xA0;queries</em></strong>.</p><p>In practise they are mostly used for basic style modifications such as color toggling based on a condition, but I have also heard of people and even companies using this as their sole styling mechanism.</p><p><em>(Be aware that, arguably, inline styles can also be considered as part of CSS-in-JS, because technically you do write them inside of JS files with React. The reason I chose to put them into their own category was because CSS-in-JS libraries are typically more complex than just writing styles inside of a style attribute&#x200A;&#x2014;&#x200A;they instead introduce some sort of a higher level abstraction as you will see in the CSS-in-JS section.)</em></p><h4>CSS Modules</h4><p>With CSS modules you create a CSS file for every type of component that you want to style the same way that you might do with the<em> &#x201C;Standard CSS&#x201D;</em> option, however the difference here is that with CSS modules the styles are <strong><em>scoped locally</em></strong> which means that unlike <em>&#x201C;Standard CSS&#x201D;</em> they <strong>don&#x2019;t leak into other components</strong>.</p><p>The styles being locally scoped also means that you can forget about implementing your own local scoping strategies or following methodologies such as <a href="http://getbem.com"><strong><em>BEM</em></strong></a> which require you to manually create and type out long class or id&#xA0;names.</p><p><strong><em>How to use within&#xA0;React:</em></strong></p><p>Use <strong><em>css-loader</em></strong> inside of your webpack.config with modules property set to true, or download a complete library such as <strong><em>css-modules</em></strong>, once setup use as&#xA0;follows:</p><ul><li>create a CSS file for whatever components you want to&#xA0;style</li><li>write your&#xA0;CSS</li><li>import this CSS file inside of the target components</li><li>reference these styles within your components via their className and id attributes</li></ul><p><strong><em>How are CSS Modules implemented behind the&#xA0;scenes?</em></strong></p><p>CSS Modules work by taking your CSS files and running them through a <strong><em>CSS Module compiler</em></strong> which does two&#xA0;things:</p><ul><li>modifies the class and/or id names inside of your CSS files to make them&#xA0;unique</li><li>produces a JS file containing the mapping between the newly generated names and the old&#xA0;names</li></ul><p>Hence why you can use named imports with CSS modules&#x200A;&#x2014;&#x200A;you are not actually importing your CSS, but rather the JS that was produced by the CSS Module compiler.</p><h4>CSS-in-JS</h4><p>As the name suggests with CSS-in-JS you write your CSS inside of JavaScript files rather than CSS files, how you write and apply them, however, is very dependant on the specific CSS-in-JS library that you&#xA0;use.</p><p>Behind the scenes CSS-in-JS is usually implemented in one of the following three ways <em>(or a combination of)</em>:</p><ul><li>via inline&#xA0;styles</li><li>via a &lt;style&gt;&#xA0;element</li><li>via a &lt;link&gt; element at build time by extracting styles into a CSS&#xA0;file</li></ul><p>For the sake of not making the article overly long, we will only look at a single CSS-in-JS implementation, that is <strong><em>styled-components</em></strong>, which also happens to be one of the most popular implementations out&#xA0;there.</p><p>Before we break down how it works however, let&#x2019;s first look at an&#xA0;example:</p><pre><code class="language-markup">import React, { Component } from &quot;react&quot;;import styled from &quot;styled-components&quot;;</code></pre><pre><code class="language-markup">const Wrapper = styled.div`  max-width: 600px;  margin: 0 auto;`;</code></pre><pre><code class="language-markup">class HelloWorld extends Component {  render() {    return (      &lt;Wrapper&gt;        &lt;p&gt;Hello World&lt;/p&gt;      &lt;/Wrapper&gt;    );  }}</code></pre><p>Let&#x2019;s now break this example down. At the top we declare a variable called Wrapper and ask <strong><em>styled-components</em></strong> to create and give us back a div <strong>component</strong> consisting of the styles that we have defined within the backticks&#x200A;&#x2014;&#x200A;in this case we are asking it for a div component with the following stylesmax-width: 600px; margin: 0&#xA0;auto;.</p><p>We then add this Wrapper component inside of our render method and use it like a regular&#xA0;div.</p><p>In simple terms all that is going on here is you tell styled-components what kind of a built-in component you want and how it should be styled and styled-components give you that component back.</p><p><strong><em>How do the styles get applied behind the&#xA0;scenes?</em></strong></p><p>Styled-components rely on the&lt;style&gt; element, so internally you can think of it like creating and appending&lt;style&gt; <em>your styles</em> &lt;/style&gt; to the documents head section. Also since it provides local style scoping, it takes care of generating and applying unique class&#xA0;names.</p><p>To better visualise this, let&#x2019;s run the above code snippet and see what it produces after being added to the&#xA0;DOM:</p><pre><code class="language-markup">...&lt;head&gt;  ...  &lt;style&gt;    /* sc-component-id: sc-bdVaJa */    .sc-bdVaJa {}    .brPdfu {      max-width: 600px;      margin: 0 auto;    }  &lt;/style&gt;&lt;/head&gt;</code></pre><pre><code class="language-markup">&lt;body&gt;  &lt;div id=&quot;app&quot;&gt;    &lt;div class=&quot;sc-bdVaJa brPdfu&quot;&gt;      &lt;p&gt;Hello World&lt;/p&gt;    &lt;/div&gt;  &lt;/div&gt;&lt;/body&gt;...</code></pre><p>As you can see it does look like what we expected it to look like. The only surprise is the extra empty style declaration&#xA0;.sc-bdVaJa {}which based on the comment right above it/* sc-component-id: sc-bdVaJa */seems to suggest that styled-components keep track of which component the styles belong to&#x200A;&#x2014;&#x200A;presumably for some sort of internal performance optimisation or something along those&#xA0;lines.</p><p>If you like what you see, you might also want to checkout another, very similar, CSS-in-JS library called <strong><em>Emotion</em></strong>, it is very similar to <strong><em>styled-components</em></strong> but gives you the option of extracting all of your styles into a CSS file, at build time, which then get linked into the document via the &lt;link&gt; element. Why is this useful? Because the generated stylesheet can be cached by the&#xA0;browser.</p><p>For a full list of the most popular CSS-in-JS solutions see this <a href="https://github.com/MicheleBertoli/css-in-js">github</a> repository.</p><h4>Finish line</h4><p>Congratulations for getting to the end&#xA0;:), thanks for reading and hope you learned something of use. Twitter: <a href="https://twitter.com/linasmnew">linasmnew</a>.</p><figure><img alt src="https://cdn-images-1.medium.com/max/1024/1*8d4bSxyE4Hl5dfN4UuJe-w.jpeg"></figure><figure><a href="https://goo.gl/w4Pbea"><img alt src="https://cdn-images-1.medium.com/max/700/1*PZjwR1Nbluff5IMI6Y1T6g@2x.png"></a></figure>                <div class="archive-tags">                                        <a class="tag" href="https://hackernoon.com/tagged/javascript">Javascript</a>                                        <a class="tag" href="https://hackernoon.com/tagged/programming">Programming</a>                                        <a class="tag" href="https://hackernoon.com/tagged/web-development">Web Development</a>                                        <a class="tag" href="https://hackernoon.com/tagged/react">React</a>                                        <a class="tag" href="https://hackernoon.com/tagged/coding">Coding</a>                  </div>                <div class="twitter-discussion">          <a target="_blank" href="https://twitter.com/search?q=https%3A%2F%2Fhackernoon.com%2Fhow-does-css-fit-into-react-5a4aa4840135">Continue the discussion <i class="fab fa-twitter"></i></a>        </div>