console.log("blur");
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
//console.log("enter content script");
if(message.txt=="Hello")
{
replace(message.selectedImage, sender, sendResponse);
}
});
function replace(message, sender, sendResponse){
let imgs = document.querySelectorAll('amp-img, img, a, style, source, canvas');
switch (message){
 case "image1":
 console.log("case1")
 for (imgElt of imgs){ 
 let file="assets/kitten.jpg";
 let url =chrome.extension.getURL(file);
 imgElt.src= url;
 }
 break;
 case "image2":
 for (imgElt of imgs){ 
 let file="assets/puppy.jpg";
 let url =chrome.extension.getURL(file);
 imgElt.src= url;
 }
 break;

 case "image3":
 for (imgElt of imgs){ 
 let file="assets/binary.jpg";
 let url =chrome.extension.getURL(file);
 imgElt.src= url;
 }
 break;
     
 case "image4":
 for (imgElt of imgs){ 
 let file="assets/superman.jpg";
 let url =chrome.extension.getURL(file);
 imgElt.src= url;
 }
 break;

 case "image5":
 for (imgElt of imgs){ 
 let file="assets/matrix.jpg";
 let url =chrome.extension.getURL(file);
 imgElt.src= url;
 }
 break;
 }  
}



//////////////////////////////////////////


// switch (message){
//
// case "image1":
// console.log("case1")
// for (imgElt of imgs){ 
// let file="assets/kitten.jpg";
// let url =chrome.extension.getURL(file);
// imgElt.src= url;
// }
// break;
// case "image2":
// for (imgElt of imgs){ 
// let file="assets/puppy.jpg";
// let url =chrome.extension.getURL(file);
// imgElt.src= url;
// }
// break;
//
// case "image3":
// for (imgElt of imgs){ 
// let file="assets/ruchi.jpg";
// let url =chrome.extension.getURL(file);
// imgElt.src= url;
// }
// break;
//     
// case "image4":
// for (imgElt of imgs){ 
// let file="assets/superman.jpg";
// let url =chrome.extension.getURL(file);
// imgElt.src= url;
// }
// break;
// }
//
//        // nsfw();
//    for(elt of images){
//        link=elt.src;
//        console.log(link);
//        var request=new XMLHttpRequest();
//        request.onreadystatechange = function() {
//            if(request.readyState === 4){
//                if(request.status ===200){
//                    console.log("gi");
//                    var data=JSON.parse(request.responseText);
//                    var nsfw_prob =data.Result;
//                    console.log(nsfw_prob);
//                    var nsfw_label= document.createElement('div');
//                }
//            }
//            request.open('GET', 'http://127.0.0.1:5000/upload?text=' + link, true);
//            request.send();
//        
//        // console.log(elt.src);
//        // let r= Math.floor(Math.random() * filenames.length); 
//        // let file="assets/"+filenames[r];
//        // let url =chrome.extension.getURL(file);
//        // elt.src= url;
//        // console.log(url);
//}
//    }

// function nsfw(node) {

//     const images = document.querySelectorAll('a,img,picture,div,figure');
  
//     images.forEach(function (el) {
//       var link = '';
//       link=el.src;
//     //   var link = '';
//     //   for (var i = 0; i < links.length; i++) {
//     //     link = (links[i].innerHTML);
      
  
//       var request = new XMLHttpRequest();
//       request.onreadystatechange = function () {
//         if (request.readyState === 4) {
//           if (request.status === 200) {
//             var data = JSON.parse(request.responseText);
//             var nsfw_probability = data.Result;
//             var nsfw_label = document.createElement('div');
  
            
//               nsfw.style.textDecoration = 'underline';
//               nsfw_label.style.color = 'rgb(128, 0, 0)';
//               nsfw_label.style.fontSize = '18px';
  
//               nsfw_label.style.textAlign = 'right';
//             //   nsfw_label.textContent = 'nsfw';
//             // } else if ( (nsfw_probability > 0.6) && (nsfw_probability < 0.9) ) {
//             //   nsfw_label.style.textDecoration = 'underline';
//             //   nsfw_label.style.color = 'rgb(' + Number((nsfw_probability) * 1.28).toFixed(0) + ', ' + Number((100 - nsfw_probability) * 1.28).toFixed(0) + ', 0)';
//             //   //console.log(nsfw_banner.style.color);
//             //   nsfw_label.style.textAlign = 'right';
//             //   nsfw_label.style.fontSize = '18px';
//             //   var probability= Math.round(nsfw_probability*100);
  
//               nsfw_label.textContent = (nsfw_probability) + '% nsfw';
            
//             var elParent = el.parentNode;
//             var parentParent= elParent.parentNode;
  
//         parentParent.append(nsfw_label);
//             //console.log(nsfw_banner);
//             //console.log(nodeParent);
//           }
//         }
//       };
  
//       request.open('GET', 'http://127.0.0.1:5000/upload?text=' + link, true);
//       request.send();
                                                                                                                                                                                                                                                                                                                                                                       
//     });
  
//   };
