/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['varela-round, sans-serif']='<script src=\"http://use.edgefonts.net/varela-round:n4:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'rect',
                rect: ['0px', '1px','1240px','100px','auto', 'auto'],
                fill: ["rgba(233,233,233,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'genealogist_logo_2',
                type: 'image',
                rect: ['28px', '32px','233px','37px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"genealogist%20logo%202.png",'0px','0px']
            },
            {
                id: 'signup-btn',
                type: 'group',
                rect: ['1070', '26','138','50','auto', 'auto'],
                c: [
                {
                    id: 'RoundRect',
                    type: 'rect',
                    rect: ['0px', '0px','138px','50px','auto', 'auto'],
                    borderRadius: ["40px 40px", "40px 40px", "40px 40px", "40px 40px"],
                    fill: ["rgba(41,202,204,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","solid"]
                },
                {
                    id: 'signup_butn',
                    type: 'text',
                    rect: ['32px', '16px','auto','auto','auto', 'auto'],
                    text: "SIGN UP",
                    font: ['varela-round, sans-serif', 16, "rgba(255,255,255,1.00)", "600", "none", ""]
                }]
            },
            {
                id: 'heading',
                type: 'text',
                rect: ['316px', '155px','auto','auto','auto', 'auto'],
                text: "Your Family History Belongs Here",
                align: "left",
                font: ['varela-round, sans-serif', 36, "rgba(132,132,132,1.00)", "600", "none", "normal"]
            },
            {
                id: 'sub_heading',
                type: 'text',
                rect: ['307px', '206px','auto','auto','auto', 'auto'],
                text: "Sign up for Genealogist to start documenting your family's story.",
                align: "left",
                font: ['varela-round, sans-serif', 18, "rgba(132,132,132,1)", "400", "none", "normal"]
            },
            {
                id: 'panel',
                type: 'rect',
                rect: ['384', '267','auto','auto','auto', 'auto']
            },
            {
                id: 'signup_buttons',
                type: 'group',
                rect: ['453', '328','334','285','auto', 'auto'],
                c: [
                {
                    id: 'signup-btnCopy',
                    type: 'group',
                    rect: ['1px', '0px','333px','50','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRectCopy',
                        type: 'rect',
                        rect: ['0px', '0px','333px','50px','auto', 'auto'],
                        borderRadius: ["40px 40px", "40px 40px", "40px 40px", "40px 40px"],
                        fill: ["rgba(66,93,153,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'signup_butnCopy',
                        type: 'text',
                        rect: ['74px', '15px','auto','auto','auto', 'auto'],
                        text: "Sign up using Facebook",
                        font: ['varela-round, sans-serif', 16, "rgba(255,255,255,1.00)", "400", "none", ""]
                    }]
                },
                {
                    id: 'signup-btnCopy2',
                    type: 'group',
                    rect: ['1px', '105px','333px','50','auto', 'auto'],
                    c: [
                    {
                        id: 'RoundRectCopy2',
                        type: 'rect',
                        rect: ['0px', '0px','333px','50px','auto', 'auto'],
                        borderRadius: ["40px 40px", "40px 40px", "40px 40px", "40px 40px"],
                        fill: ["rgba(170,170,170,0.83)"],
                        stroke: [0,"rgb(0, 0, 0)","solid"]
                    },
                    {
                        id: 'signup_butnCopy2',
                        type: 'text',
                        rect: ['64px', '15px','auto','auto','auto', 'auto'],
                        text: "Sign up using your email",
                        font: ['varela-round, sans-serif', 16, "rgba(255,255,255,1.00)", "400", "none", ""]
                    }]
                },
                {
                    id: 'or',
                    type: 'text',
                    rect: ['159px', '67px','auto','auto','auto', 'auto'],
                    text: "or",
                    align: "left",
                    font: ['varela-round, sans-serif', 16, "rgba(132,132,132,1.00)", "400", "none", "italic"]
                },
                {
                    id: 'by_creating',
                    type: 'text',
                    rect: ['0px', '185px','333px','37px','auto', 'auto'],
                    text: "By creating an account, I accept Genealogist's Terms of Service and Privacy Policy.",
                    align: "center",
                    font: ['varela-round, sans-serif', 14, "rgba(132,132,132,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'signin_text',
                    type: 'group',
                    rect: ['57px', '271px','219','14','auto', 'auto'],
                    c: [
                    {
                        id: 'already_account',
                        type: 'text',
                        rect: ['0px', '0px','auto','auto','auto', 'auto'],
                        text: "Already have an account? ",
                        align: "center",
                        font: ['varela-round, sans-serif', 12, "rgba(132,132,132,1)", "300", "none", "normal"]
                    },
                    {
                        id: 'sign_in',
                        type: 'text',
                        rect: ['152px', '0px','auto','auto','auto', 'auto'],
                        text: "Sign In here",
                        align: "center",
                        font: ['varela-round, sans-serif', 12, "rgba(41,202,204,1.00)", "300", "none", "normal"]
                    }]
                }]
            }],
            symbolInstances: [
            {
                id: 'panel',
                symbolName: 'panel'
            }
            ]
        },
    states: {
        "Base State": {
            "${_signup_butnCopy}": [
                ["style", "top", '15px'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'varela-round, sans-serif'],
                ["style", "left", '74px'],
                ["style", "font-size", '16px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(41,202,204,1.00)'],
                ["style", "border-top-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '0px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_by_creating}": [
                ["style", "top", '185px'],
                ["style", "text-align", 'center'],
                ["style", "width", '333px'],
                ["color", "color", 'rgba(132,132,132,1.00)'],
                ["style", "height", '37px'],
                ["style", "left", '0px'],
                ["style", "font-size", '14px']
            ],
            "${_heading}": [
                ["color", "color", 'rgba(132,132,132,1.00)'],
                ["style", "top", '155px'],
                ["style", "left", '316px'],
                ["style", "font-size", '36px']
            ],
            "${_signup_butnCopy2}": [
                ["style", "top", '15px'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-family", 'varela-round, sans-serif'],
                ["style", "left", '64px'],
                ["style", "font-size", '16px']
            ],
            "${_signup_buttons}": [
                ["style", "top", '328px'],
                ["style", "left", '453px']
            ],
            "${_or}": [
                ["style", "top", '67px'],
                ["color", "color", 'rgba(132,132,132,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '159px'],
                ["style", "font-style", 'italic']
            ],
            "${_sign_in}": [
                ["color", "color", 'rgba(41,202,204,1.00)'],
                ["style", "left", '152px'],
                ["style", "top", '0px']
            ],
            "${_signup-btnCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '1px'],
                ["style", "width", '333px']
            ],
            "${_already_account}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_signup_butn}": [
                ["style", "top", '16px'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'varela-round, sans-serif'],
                ["style", "left", '32px'],
                ["style", "font-size", '16px']
            ],
            "${_signin_text}": [
                ["style", "left", '57px'],
                ["style", "top", '271px']
            ],
            "${_RoundRectCopy}": [
                ["color", "background-color", 'rgba(66,93,153,1.00)'],
                ["style", "border-top-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '0px'],
                ["style", "width", '333px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${_RoundRectCopy2}": [
                ["color", "background-color", 'rgba(170,170,170,0.83)'],
                ["style", "border-top-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '0px'],
                ["style", "width", '333px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '50px'],
                ["style", "left", '0px'],
                ["style", "border-top-right-radius", [40,40], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_signup-btnCopy2}": [
                ["style", "top", '105px'],
                ["style", "left", '1px'],
                ["style", "width", '333px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1240px'],
                ["style", "height", '768px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bg}": [
                ["color", "background-color", 'rgba(233,233,233,1.00)'],
                ["style", "height", '100px'],
                ["style", "width", '1240px']
            ],
            "${_genealogist_logo_2}": [
                ["style", "top", '32px'],
                ["style", "left", '28px']
            ],
            "${_sub_heading}": [
                ["style", "top", '206px'],
                ["style", "font-weight", '400'],
                ["style", "left", '307px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1100,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_signup_buttons}", "left", '466px', { fromValue: '453px'}], position: 0, duration: 1100 },
                { id: "eid7", tween: [ "style", "${_signup_buttons}", "top", '-324px', { fromValue: '328px'}], position: 0, duration: 1100 },
                { id: "eid9", tween: [ "style", "${_sub_heading}", "left", '340px', { fromValue: '307px'}], position: 0, duration: 1100 }            ]
        }
    }
},
"Symbol_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'genealogist_logo',
                    type: 'image',
                    rect: ['0px', '0px', '233px', '37px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/genealogist%20logo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '37px'],
                ["style", "width", '233px']
            ],
            "${_genealogist_logo}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"panel": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '471px', '395px', 'auto', 'auto'],
                    borderRadius: ['40px 40px', '40px 40px', '40px 40px', '40px 40px'],
                    id: 'rrec',
                    stroke: [1, 'rgba(132,132,132,0.65)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(233,233,233,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '397px'],
                ["style", "width", '473px']
            ],
            "${_rrec}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(233,233,233,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["color", "border-color", 'rgba(132,132,132,0.65)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1100,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_rrec}", "left", '-1px', { fromValue: '0px'}], position: 0, duration: 1100 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-39185663");
