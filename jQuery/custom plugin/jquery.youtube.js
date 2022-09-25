$.fn.youtube=function(options){
    var setting=$.extend({
        id:"b0LG1CHiqJY",
        height:"300",
        width:'560',
        title:'Youtube Video'
    },options);

    return this.append(
        '<iframe width="'+setting.width+'" height="'+setting.height+'" src="https://www.youtube.com/embed/'+setting.id+'" title="'+setting.title+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    )
}