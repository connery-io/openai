(()=>{var e={926:e=>{e.exports={key:"CreateChatCompletion",title:"Create chat completion",description:"Creates a model response for the given chat conversation.",type:"create",inputParameters:[{key:"Prompt",title:"User prompt",description:"User prompt to send to OpenAI",type:"string",validation:{required:!0}}],operation:{type:"js",handler:async function({inputParameters:e,configurationParameters:t}){return{}}},outputParameters:[]}},63:e=>{e.exports={key:"SampleAction",title:"Sample action",description:"A sample action that adds two numbers",type:"read",inputParameters:[{key:"Number1",title:"Number 1",description:"The first number to add",type:"string",validation:{required:!0}},{key:"Number2",title:"Number 2",description:"The second number to add",type:"string",validation:{required:!0}}],operation:{type:"js",handler:async function({inputParameters:e}){return{Sum:Number(e.Number1)+Number(e.Number2)}}},outputParameters:[{key:"Sum",title:"Sum",description:"The sum of the two numbers",type:"string",validation:{required:!0}}]}},10:(e,t,r)=>{const n=r(926),o=r(63);e.exports={title:"OpenAI",description:"OpenAI connector for Connery",actions:[n,o],configurationParameters:[],maintainers:[{name:"Connery",email:"contact@connery.io"}]}}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(10);module.exports=r})();