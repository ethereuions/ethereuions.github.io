import React,{Component} from 'react';

class ItemGen extends Component{
    render(){
        return(
            <li id="item">
                <a id='itemHeading' href={this.props.item.itemLink}><strong>#{this.props.item.itemHeading}</strong></a>
                <p id='itemText'>{this.props.item.itemText}</p>
            </li>
        );
    }

}
class ItemListGen extends Component{
    render(){
        var rows=[];
        this.props.items.forEach((item) => {
            rows.push(<ItemGen item={item} />);
          });
    return (
            <ul>
            {rows}
            </ul>   
);
}
}
class RelatedSearches extends Component{
    render(){
        return(
            <div id="TrendsForYou">
             <div>
             <span><strong>Search Filters</strong><a href="#">&nbsp;.&nbsp;Change</a></span>
             <hr/>
             </div>    
            <span><strong>Related Searches</strong></span>
            <ItemListGen items={this.props.items}/>
            </div>
        );
    }
}
export default RelatedSearches;
