click the panel, it expends.

<!-- easy mode -->

Todo1:

- build a div container to wrap all the panel
- build a div panel width background-image url with a link of image
- create an h3 in the div of panel

Todo2:

- set the font family to Muli
- reset the css, box-sizing: border-box
  <!-- (Q: what is box-sizing: border-box for?) -->
- set the body element, display: flex, align-items:center, justify-items:center, height: 100vh, overflow:hidden; margin:0
  <!-- (Q: what is display:flex for? and what effect it cause?) -->
  <!-- (Q: what is align-items:center, justify-items:center for? and what effect they cause?) -->

Todo3: set the panel div horizontal

- set container display: flex, width: 90vw
- set panel background-size: auto 100%
- set panel background-position: center
- set panel background-repeat: no-repeat
- set height: 80vh
- set border-radius: 50px
- set cursor: pointer
- \*set flex: 0.5
- set margin: 10px
- set position: relative
- transition: flex 0.7s ease-in

Todo4: set h3

- set font-size: 24px
- position: absolute
- bottom: 20px
- left: 20px
- margin:0
- opacity: 0

Todo5: set the panel active

- set panel.active flex:5
- set panel.active h3 opacity: 1

Todo6: set the media query if the width smaller

- set media query max-width:480px and the container div width: 100vw
- set the panel div .panel:nth-of-type(4),.panel:nth-of-type(4) display:none

Todo 7: build expending effect

- use doc querySelectorAll and choose the first panel div element
