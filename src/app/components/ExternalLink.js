export default function ExternalLink({text, href}) 
{
    return (<a className="flex-item link-text" 
        target="_blank"
        rel="noopener noreferrer"
        href={href}>
            {text}
        </a>);
}