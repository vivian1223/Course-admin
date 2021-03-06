const app = Vue.createApp({
    data() {
        return {
            assignment:true,
            admin:false,
            editor:false,
            reply:true,
            backgroundDarkenLayer:false,
            adminModal:false,
            windowModal:false,
            previewEdit:false,
            editAdmin:false,
            adminInfo:[
                {
                id:1,
                name:"Emir Wicks",
                email:"emir.wicks@mail.com",
                verified:true,
                },
                {
                    id:2,
                    name:"Zaina Goldsmith",
                    email:"zaina.goldsmith@mail.com",
                    verified:true,
                },
                {
                    id:3,
                    name:"Mahima Lopez",
                    email:"mahima.lopez@mail.com",
                    verified:true,
                },
                {
                    id:4,
                    name:"Pharrell Murray",
                    email:"pharrell.murray@mail.com",
                    verified:true,
                },
                {
                    id:5,
                    name:"Annika Mcbride",
                    email:"fatimah.clark@mail.com",
                    verified:true,
                },
                {
                    id:6,
                    name:"Klaudia Rhodes",
                    email:"klaudia.rhodes@mail.com",
                    verified:true,
                },
                {
                    id:7,
                    name:"Fatimah Clark",
                    email:"fatimah.clark@mail.com",
                    verified:true,
                },
                {
                    id:8,
                    name:"Tillie Lucero",
                    email:"tillie.lucero@mail.com",
                    verified:true,
                },
                {
                    id:9,
                    name:"Sabrina Stephenson",
                    email:"sabrina.stephenson@mail.com",
                    verified:true,
                },
                {
                    id:10,
                    name:"Annie Smith",
                    email:"annie.smith@mail.com",
                    verified:true,
                },
            ]
        }
    },
    methods: {
        showAssignment(){
            this.admin = false;
            this.assignment = true;
        },
        showAdmin(){
            this.assignment = false;
            this.admin = true;
           
        },
        toggleEditor(){
            this.editor = !this.editor;
            this.reply = !this.reply;
        },
        togglePreview(){
            this.backgroundDarkenLayer = !this.backgroundDarkenLayer;
            const wholePage = document.querySelector('#app') 
            const pageOverflow = wholePage.style.overflow;
            if( pageOverflow === "hidden"){
                pageOverflow === "visible"
            }else{
                pageOverflow === "hidden"
            }
            this.adminModal = !this.adminModal;

        },
        toggleWindow(){
            this.backgroundDarkenLayer = !this.backgroundDarkenLayer;
            const wholePage = document.querySelector('#app') 
            const pageOverflow = wholePage.style.overflow;
            if( pageOverflow === "hidden"){
                pageOverflow === "visible"
            }else{
                pageOverflow === "hidden"
            }
            this.windowModal = !this.windowModal;
        },
        toggleEdit(){
            this.previewEdit = !this.previewEdit;
        },
        showEditAdmin(){
            this.backgroundDarkenLayer = true;
            const wholePage = document.querySelector('#app') 
            const pageOverflow = wholePage.style.overflow;
                pageOverflow === "hidden";
            this.editAdmin= true;
            this.previewEdit = false;
            this.adminModal= false;
        },
        hiddenEditAdmin(){
            this.backgroundDarkenLayer = false;
            const wholePage = document.querySelector('#app') 
            const pageOverflow = wholePage.style.overflow;
                pageOverflow === "visible"
            this.editAdmin= false;
        }
    
    },
});

app.mount('#app');