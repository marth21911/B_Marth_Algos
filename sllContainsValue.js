contains(value) {
    var node=this.head
    while( node){
        if (node.value === value){
        console.log("True")
        return true
        }  
        node=node.next;
        console.log ("False")
        return false
    }
}
}