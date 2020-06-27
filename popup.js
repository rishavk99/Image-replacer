document.addEventListener('DOMContentLoaded', function(){
    var submitButton = document.getElementById('button_submit');
    submitButton.addEventListener('click',function() {
        
        
//        alert(document.outerHTML);
        let params={
            active: true,
            currentWindow: true
        }
        // console.log(params)
        chrome.tabs.query(params, gotTabs);
        function gotTabs(tabs) {
            var selected=document.getElementById("select_image");
            // console.log("popup.js");
            var selectedImage =selected.options[selected.selectedIndex].value;
            let message={
                txt: "Hello",
                selectedImage: selectedImage,
            }
            chrome.tabs.sendMessage(tabs[0].id , message);            
            }   
    });
});

