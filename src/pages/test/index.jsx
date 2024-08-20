import React, {useEffect} from 'react' 
const index = () => {

  useEffect(() => {
    var s=document.createElement("script");
    s.type="text/javascript";
    s.async=true;
    s.src="https://chatbot.in1.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/3845f35478c52082/1325773dd3dd43a7a3e8c868b32f1c35";
    document.body.appendChild(s);
  }, []);

  const style = {
    display: 'flex', 
    color: '#fff',
    background: '#3274D3',
    fontSize: '70px',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '15px',
    height: '100vh',
    margin: '0',
    justifyContent: "center",
    alignItems: "center",
    textAlign : "center"
  };
  return (
    <>

 <h1 style={style} class="cs-header-title">Shoolini University <br ></br>Test Page</h1>
 <div class="npf_chatbots" data-w="1325773dd3dd43a7a3e8c868b32f1c35"></div>
    </>
  )
}

export default index