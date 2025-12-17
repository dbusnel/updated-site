import './style/links.css';
import ExternalLink from './ExternalLink';

export default function links() 
{
    return (
        // Pad to the right slightly to better fit the italicized 'l'
        <div className="horizontal-flex equally-space-horizontal right-padded">
            <ExternalLink text="LinkedIn" href="https://www.linkedin.com/in/davidbusnel/"/>
            <ExternalLink text="GitHub" href="https://github.com/dbusnel"/>
            <a className="flex-item link-text" href="mailto:dbusnel@icloud.com">Mail</a>
        </div>
    );
}