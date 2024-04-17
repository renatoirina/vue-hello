const { createApp } = Vue

createApp({
    data(){
        return {
            saluta: "I see you...",
            image: "./img/creepy_eyes.jpg",
        };
    }
}).mount("#app");