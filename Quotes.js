import React,{useState,useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

//import Instaicon from './insta.png';
const Quotes =()=>
{
    const[quote,setQuote]=useState('title');
    const[author,setAuthor]=useState('');
    const[color,setColor]=useState("");
    const[copied,setCopied]=useState(false);

    const click=color=>{
        setColor(color)
    }

    useEffect(() => {
        getQuote()
      }, []);
    
      const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
          .then(res => res.json())
          .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
    
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
          })
      }
    
      const handleClick = () => {
        setCopied(false);
        getQuote();
      }

      useEffect(()=>{
        document.body.style.backgroundColor=color
      },[color])
     
    return (
       
     <div id="quote-box">
        <div id="text"><p>{quote}</p></div>
        <div id="author"><p>{author}</p></div>

        <div id="buttons">
           <div className="social-media">
            <a href="#https://www.instagram.com/" id="tweet-quote" target="_blank" >
                <span><button style={{ 
           background: 'linear-gradient(45deg, #A020F0, #FFD700)',
           color: '#FFFFFF',
           border: 'none',
           padding: '10px 20px',
           borderRadius: '5px',
           cursor: 'pointer'}} id="btn">New tab</button></span>
            </a>

            <CopyToClipboard text={JSON.stringify({quote, author}, null, 2)}onCopy={() => setCopied(true)}>
            <button id="copy"style={{ 
           background: 'linear-gradient(45deg, #A020F0, #FFD700)',
           color: '#FFFFFF',
           border: 'none',
           padding: '10px 20px',
           borderRadius: '5px',
           cursor: 'pointer'}} onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000) }}>{copied ? 'Copied!' : 'Copy'}</button>

  </CopyToClipboard>


          <p></p>
          <button id="how" onClick={() => click("#A020F0")} style={{ 
           background: 'linear-gradient(45deg, #A020F0, #FFD700)',
           color: '#FFFFFF',
           border: 'none',
           padding: '10px 20px',
           borderRadius: '5px',
           cursor: 'pointer'
}}>
  Change-mode
</button>
           </div>

            <button onClick={handleClick}id="new-quote"style={{ 
           background: 'linear-gradient(45deg, #A020F0, #FFD700)',
           color: '#FFFFFF',
           border: 'none',
           padding: '10px 20px',
           borderRadius: '5px',
           cursor: 'pointer'}}>Next Quote</button>
            

        </div>
     </div>
   
    
    )
}
export default Quotes;

