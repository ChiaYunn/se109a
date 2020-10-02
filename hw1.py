class Node:
    def __init__(self):
        self.data = 0
        self.next = None

head = Node()
head.next = None

def insert_f():
    global head

    ptr = Node()
    ptr.next = None

    ptr.data = eval(input('輸入一整數：'))
    print()

    prev = head
    current = head.next
    while current != None and current.data >= ptr.data:
        prev = current
        current = current.next
    ptr.next = current
    prev.next = ptr

def display_f():
    global head

    count = 0
    if head.next == None:
        print("No data\n")
    else:
        print("Data in queue:")
        current = head.next
        while current != None:
            print(current.data)
            count += 1
            current = current.next
        print("\nTotal {} record(s) found\n" .format(count))

queue = []
#基本的queue

queue.append('a')
queue.append('b')
queue.append('c')
print('Initial queue')
print(queue)

#加
print('Elements dequeued from queue')
print(queue.pop(0))
print(queue.pop(0))
print('Queue after removing elements')
print(queue)

insert_f()
insert_f()
insert_f()


display_f()
