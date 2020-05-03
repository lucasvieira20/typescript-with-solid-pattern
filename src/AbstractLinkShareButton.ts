import EventHandler from "./EventHandler";
import AbstractShareButton from "./AbstractShareButton";

export default abstract class AbstractLinkSharedButton extends AbstractShareButton{
    url: string;

    constructor(eventHandler: EventHandler, clazz: string, url:string){
        super(eventHandler, clazz);
        this.url = url;
    }

    abstract createLink(): string;
    
    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    }

}