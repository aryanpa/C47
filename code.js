var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["75ad7831-a81b-4455-8114-c559e9365183","74359d52-013e-4bf4-b415-02235840f8d0","d8c2d02c-b0fc-416b-8b3a-cc96fff69b2b","7b038f6e-5ed6-4f36-8c6a-17f02611bf7f","289790d5-c7a0-4692-8007-6603290d395c","b59d488a-ab72-463c-94f2-c10dc1f955eb","591fb63c-657a-4c64-a495-0a765058a7df","70c5ce50-6e4a-45e5-9606-3df566225f0a","caf0ace3-8864-4138-8417-a94ecd8e8bc5","fd086793-78cf-401c-a04d-d75055850457"],"propsByKey":{"75ad7831-a81b-4455-8114-c559e9365183":{"name":"bg","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/75ad7831-a81b-4455-8114-c559e9365183.png","frameSize":{"x":168,"y":299},"frameCount":1,"looping":true,"frameDelay":4,"version":"eeh_C.AHIvlBmgq0QPrxhiHgV25CgZJ9","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":299},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/75ad7831-a81b-4455-8114-c559e9365183.png"},"74359d52-013e-4bf4-b415-02235840f8d0":{"name":"arrow.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/74359d52-013e-4bf4-b415-02235840f8d0.png","frameSize":{"x":94,"y":453},"frameCount":1,"looping":true,"frameDelay":4,"version":"nki7LizRnyHnSzHreIoTGSW.oTOqNJiC","loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":453},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/74359d52-013e-4bf4-b415-02235840f8d0.png"},"d8c2d02c-b0fc-416b-8b3a-cc96fff69b2b":{"name":"bow.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/d8c2d02c-b0fc-416b-8b3a-cc96fff69b2b.png","frameSize":{"x":427,"y":127},"frameCount":1,"looping":true,"frameDelay":4,"version":".mbqjgmOrvkPVdidn4YgranoRmGKkPxH","loadedFromSource":true,"saved":true,"sourceSize":{"x":427,"y":127},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/d8c2d02c-b0fc-416b-8b3a-cc96fff69b2b.png"},"7b038f6e-5ed6-4f36-8c6a-17f02611bf7f":{"name":"boy.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/7b038f6e-5ed6-4f36-8c6a-17f02611bf7f.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"Z7OVfIXd5c31cVTOmcih8XXZM06GH4RZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/7b038f6e-5ed6-4f36-8c6a-17f02611bf7f.png"},"289790d5-c7a0-4692-8007-6603290d395c":{"name":"girl.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/289790d5-c7a0-4692-8007-6603290d395c.png","frameSize":{"x":492,"y":507},"frameCount":1,"looping":true,"frameDelay":4,"version":"1wbFIoPRBUvzVaGarO5OOmWJijlGNYUS","loadedFromSource":true,"saved":true,"sourceSize":{"x":492,"y":507},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/289790d5-c7a0-4692-8007-6603290d395c.png"},"b59d488a-ab72-463c-94f2-c10dc1f955eb":{"name":"yellow_balloon.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/b59d488a-ab72-463c-94f2-c10dc1f955eb.png","frameSize":{"x":233,"y":217},"frameCount":1,"looping":true,"frameDelay":4,"version":"h9fZU9Y0lkfcnufnJF0VF6gwNVFDtP93","loadedFromSource":true,"saved":true,"sourceSize":{"x":233,"y":217},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/b59d488a-ab72-463c-94f2-c10dc1f955eb.png"},"591fb63c-657a-4c64-a495-0a765058a7df":{"name":"heart.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/591fb63c-657a-4c64-a495-0a765058a7df.png","frameSize":{"x":360,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"qMNX_XnGG7Eyrx.7X81jysepDYLSa4u4","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":360},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/591fb63c-657a-4c64-a495-0a765058a7df.png"},"70c5ce50-6e4a-45e5-9606-3df566225f0a":{"name":"shooter.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/70c5ce50-6e4a-45e5-9606-3df566225f0a.png","frameSize":{"x":5,"y":16},"frameCount":1,"looping":true,"frameDelay":4,"version":"lTZ0D87xalsDI2vKqI4_f0mpivA9nQ6M","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":16},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/70c5ce50-6e4a-45e5-9606-3df566225f0a.png"},"caf0ace3-8864-4138-8417-a94ecd8e8bc5":{"sourceSize":{"x":469,"y":469},"frameSize":{"x":469,"y":469},"frameCount":1,"frameDelay":4,"name":"pin.png_1","sourceUrl":"assets/v3/animations/zxtKHIUVHGEJXuecNY-SgetpHiRuD9DjiWxj7g2jG_Q/caf0ace3-8864-4138-8417-a94ecd8e8bc5.png","size":51053,"version":"A8BduzC22dnhVrlqYWMDt0VvFb5HEHB7","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/zxtKHIUVHGEJXuecNY-SgetpHiRuD9DjiWxj7g2jG_Q/caf0ace3-8864-4138-8417-a94ecd8e8bc5.png"},"fd086793-78cf-401c-a04d-d75055850457":{"sourceSize":{"x":199,"y":254},"frameSize":{"x":199,"y":254},"frameCount":1,"frameDelay":4,"name":"pruple.jpg_1","sourceUrl":"assets/v3/animations/zxtKHIUVHGEJXuecNY-SgetpHiRuD9DjiWxj7g2jG_Q/fd086793-78cf-401c-a04d-d75055850457.png","size":31501,"version":"wwh4rvBUXdabLBQcXVLILUSZaf0kJ8YI","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/zxtKHIUVHGEJXuecNY-SgetpHiRuD9DjiWxj7g2jG_Q/fd086793-78cf-401c-a04d-d75055850457.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var bg = createSprite(200, 200);
bg.setAnimation("bg");
bg.scale = 2.3;

var  greenBalloon1 = createSprite(175,85,70,70);
    greenBalloon1.setAnimation("yellow_balloon.png_1");
    greenBalloon1.scale = 0.15;

 var   greenBalloon2 = createSprite(160,155,70,70);
    greenBalloon2.setAnimation("yellow_balloon.png_1");
    greenBalloon2.scale = 0.15;


var greenBalloon3 = createSprite(110,210,70,70);
    greenBalloon3.setAnimation("yellow_balloon.png_1");
    greenBalloon3.scale = 0.15;


 var   greenBalloon4 = createSprite(50,215,70,70);
    greenBalloon4.setAnimation("yellow_balloon.png_1");
    greenBalloon4.scale = 0.15;

 
   var greenBalloon5 = createSprite(325,85,70,70);
    greenBalloon5.setAnimation("yellow_balloon.png_1");
    greenBalloon5.scale = 0.15;


   var greenBalloon6 = createSprite(350,155,70,70);
    greenBalloon6.setAnimation("yellow_balloon.png_1");
    greenBalloon6.scale = 0.15;


 var   greenBalloon7 = createSprite(390,210,70,70);
    greenBalloon7.setAnimation("yellow_balloon.png_1");
    greenBalloon7.scale = 0.15;


  var  greenBalloon8 = createSprite(450,215,70,70);
    greenBalloon8.setAnimation("yellow_balloon.png_1");
    greenBalloon8.scale = 0.15;


  var  greenBalloon9 = createSprite(140,280,70,70);
    greenBalloon9.setAnimation("yellow_balloon.png_1");
    greenBalloon9.scale = 0.15;


  var  greenBalloon10 = createSprite(210,340,70,70);
    greenBalloon10.setAnimation("yellow_balloon.png_1");
    greenBalloon10.scale = 0.15;


   var greenBalloon11 = createSprite(285,340,70,70);
    greenBalloon11.setAnimation("yellow_balloon.png_1");
    greenBalloon11.scale = 0.15;


   var greenBalloon12 = createSprite(360,280,70,70);
    greenBalloon12.setAnimation("yellow_balloon.png_1");
    greenBalloon12.scale = 0.15;
    
    heart1 = createSprite(50,85,85,85);
    heart1.setAnimation("heart.png_1");
    heart1.scale = 0.1;

    heart2 = createSprite(350,85,85,85);
    heart2.setAnimation("heart.png_1");
    heart2.scale = 0.1;

    heart3 = createSprite(250,225,85,85);
    heart3.setAnimation("heart.png_1");
    heart3.scale = 0.1;
    
   var arrow = createSprite(250,500,10,100);
    arrow.setAnimation("pin.png_1");
    arrow.scale = 0.1;
   
var yellowBalloon1 = createSprite(120,85,70,70);
yellowBalloon1.setAnimation("pruple.jpg_1");
    yellowBalloon1.scale = 0.15;
    
 var   yellowBalloon2 = createSprite(100,145,70,70);
 yellowBalloon2.setAnimation("pruple.jpg_1");
    yellowBalloon2.scale = 0.15;
    
 var   yellowBalloon3 = createSprite(50,150,70,70);
 yellowBalloon3.setAnimation("pruple.jpg_1");
    yellowBalloon3.scale = 0.15;
    
 var   yellowBalloon4 = createSprite(355,85,70,70);
  yellowBalloon4.setAnimation("pruple.jpg_1");
    yellowBalloon4.scale = 0.15;
    
 var   yellowBalloon5 = createSprite(370,145,70,70);
  yellowBalloon5.setAnimation("pruple.jpg_1");
    yellowBalloon5.scale = 0.15;
    
 var   yellowBalloon6 = createSprite(385,175,70,70);
 yellowBalloon6.setAnimation("pruple.jpg_1");
    yellowBalloon6.scale = 0.15;
    
  var  yellowBalloon7 = createSprite(250,85,70,70);
   yellowBalloon7.setAnimation("pruple.jpg_1");
    yellowBalloon7.scale = 0.15;

  var  yellowBalloon8 = createSprite(220,155,70,70);
   yellowBalloon8.setAnimation("pruple.jpg_1");
    yellowBalloon8.scale = 0.15;
    
var    yellowBalloon9 = createSprite(290,155,70,70);
 yellowBalloon9.setAnimation("pruple.jpg_1");
    yellowBalloon9.scale = 0.15;

  var  yellowBalloon10 = createSprite(175,215,70,70);
   yellowBalloon10.setAnimation("pruple.jpg_1");
    yellowBalloon10.scale = 0.15;
    
 var   yellowBalloon11 = createSprite(325,215,70,70);
  yellowBalloon11.setAnimation("pruple.jpg_1");
    yellowBalloon11.scale = 0.15;

  var  yellowBalloon12 = createSprite(195,275,70,70);
   yellowBalloon12.setAnimation("pruple.jpg_1");
    yellowBalloon12.scale = 0.15;
    
 var   yellowBalloon13 = createSprite(245,290,70,70);
  yellowBalloon13.setAnimation("pruple.jpg_1");
    yellowBalloon13.scale = 0.15;
    
 var   yellowBalloon14 = createSprite(305,275,70,70); 
  yellowBalloon14.setAnimation("pruple.jpg_1");
    yellowBalloon14.scale = 0.15;
 
var scores=0;

var hearts = 0;

var pins = 18;


 
function draw() {

  background(rgb(World.mouseX, World.mouseY, 0));
 
 arrow.x=World.mouseX;
 arrow.y=World.mouseY;
   
if (arrow.isTouching(greenBalloon1))
{
   greenBalloon1.destroy();
   scores=scores+1;
   pins = pins-1;
   
   }
  
 if (arrow.isTouching(greenBalloon2))
{
   greenBalloon2.destroy();
   scores=scores+1;
   pins = pins-1;
   
   }
   if (arrow.isTouching(greenBalloon3))
{
   greenBalloon3.destroy();
   scores=scores+1;
   pins = pins-1;
   
   }
   if (arrow.isTouching(greenBalloon4))
{
   greenBalloon4.destroy();
   scores=scores+1;
    pins = pins-1;
   
   }
   if (arrow.isTouching(greenBalloon5))
{
   greenBalloon5.destroy();
   scores=scores+1;
    pins = pins-1;
   
   }
  if (arrow.isTouching(greenBalloon6))
{
   greenBalloon6.destroy();
   scores=scores+1;
    pins = pins-1;
   
   }
  
  if (arrow.isTouching(greenBalloon7))
{
   greenBalloon7.destroy();
   scores=scores+1;
    pins = pins-1;
   
   }
if (arrow.isTouching(greenBalloon8))
{
   greenBalloon8.destroy();
   scores=scores+1;
    pins = pins-1;
   
   }
    
 if (arrow.isTouching(greenBalloon9))
{
   greenBalloon9.destroy();
   scores=scores+1;
    pins = pins-1;
    
   }
 if (arrow.isTouching(greenBalloon10))
{
   greenBalloon10.destroy();
   scores=scores+1;
    pins = pins-1;
    
   }
 if (arrow.isTouching(greenBalloon11))
{
   greenBalloon11.destroy();
   scores=scores+1;
    pins = pins-1;
    
   }
 if (arrow.isTouching(greenBalloon12))
{
   greenBalloon12.destroy();
   scores=scores+1;
    pins = pins-1;
    
   }
   
   if (arrow.isTouching(heart1))
{
   heart1.destroy();
   hearts=hearts+1;
    pins = pins-1;
    
   }
  
 if (arrow.isTouching(heart2))
{
   heart2.destroy();
   hearts=hearts+1;
    pins = pins-1;
    
   }
   if (arrow.isTouching(heart3))
{
   heart3.destroy();
   hearts=hearts+1;
    pins = pins-1;
    
   }
              
    
  drawSprites();
  
   textSize(25);
  text("SCORE :- "+scores,215,45);
  
  textSize(25);
  text("Hearts :- "+hearts,70,45);
  
  textSize(25);
  fill(0);
  text("Pins :- "+pins,285,370)
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
