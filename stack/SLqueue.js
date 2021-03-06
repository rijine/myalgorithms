function QueueNode(val){
    this.val = val;
    this.next = null;
  }
  
  function Queue(){
    this.head = null;
    this.tail = null;
  }
  
  var isEmpty = function(q) {
    if (q.head == null && q.tail == null) {
      return true;
    }
    return false;
  }

  var enqueue = function(q, val){
    newmember = new QueueNode(val);
    //If there are no members in the queue,
    //this will be the first member
    if (q.tail == null) {
      q.head = newmember;
      q.tail = newmember;
    } else {
      oldtail = q.tail;
      oldtail.next = newmember;
      q.tail = newmember;
    }
  }
  
  var dequeue = function(q){
    //If there are no members in the queue, nothing to dequeue
    if (q.head == null) {
      console.log("Nothing to dequeue")
      return null;
    }
    //if head and tail are same, only one member in queue
    //both of them will be null once we dequeue
    if (q.head == q.tail){
      remmember = q.head;
      q.head = null;
      q.tail = null;
      return remmember.val;
    } else {
      remmember = q.head;
      q.head = q.head.next;
      return remmember.val;
    }
  }
  
  var deleteQueue = function(q){
  
    if(q.head == null){
  
      return 
    } else {
      temp = q.head;
      while(temp != null){
  
        temp = temp.next
      }
      q.head = null
      q.tail = null
    }
    // return q
  } 
  
  q = new Queue()
  console.log(dequeue(q))
  console.log(q)
  console.log(enqueue(q, 1))
  console.log(q)
  console.log(enqueue(q, 2))
  console.log(q)
  // console.log(dequeue(q))
  console.log(q)
  console.log(enqueue(q, 3))
  console.log(q)
  console.log(enqueue(q, 4))
  console.log(q)
  // console.log(dequeue(q))
  console.log(q)
  console.log(enqueue(q, 5))
  console.log(q)
  console.log(deleteQueue(q))
  console.log(q)