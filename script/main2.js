window.addEventListener('load', () => {
    const audio = document.querySelector('.song');

    // Attempt to play audio
    audio.play().then(() => {
        console.log("Audio is playing automatically.");
        animationTimeline();
    }).catch(error => {
        console.log("Autoplay failed, enabling controls.");
        // Enable controls to let user play it manually
        audio.controls = true;
        animationTimeline();
    });
});

  
  // animation timeline
  const animationTimeline = () => {
    $('body').addClass('peach');
    const textBoxChars = document.getElementsByClassName("idea-1")[0];
    const hbd = document.getElementsByClassName("idea-5")[0];
  
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
    hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;
  
    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
    }
  
    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
    }
  
    const tl = gsap.timeline();
  
    tl.to(".container", {duration: 6, visibility: "visible"})
      .from(".idea-1", {duration: 1.5, ...ideaTextTrans})
      .to(".idea-1", {duration: 1.5, ...ideaTextTransLeave, delay: 2.5})
      .from(".idea-2", {duration: 0.7, ...ideaTextTrans})
      .to(".idea-2", {duration: 0.7, ...ideaTextTransLeave, delay: 2.5})
      .from(".idea-3", {duration: 1.5, ...ideaTextTrans})
      .to(".idea-3 strong", {duration: 0.5, scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff"})
      .to(".idea-3", {duration: 0.7, ...ideaTextTransLeave, delay: 2.5})
      .from(".idea-4", {duration: 0.7, ...ideaTextTrans})
      .to(".idea-4", {duration: 0.7, ...ideaTextTransLeave, delay: 2.5})
      .from(".idea-5", {duration: 0.7, ...ideaTextTrans})
      .to(".idea-5", {duration: 0.7, ...ideaTextTransLeave, delay: 2.5})
      .call(() => {
        window.location.href = "flower.html";
    });
}
