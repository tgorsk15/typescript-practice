import { v4 as uuidv4 } from 'uuid';

console.log('hey friend')

console.log('hi babe')
console.log('hey bae')
console.log('test')

type Task = {
    id: string,
    title: string,
    completed: boolean,
    createdAt: Date
}

// const list = document.querySelector()

const newTask: Task = {
    id: uuidv4(),
    title: 'Hi',
    completed: false,
    createdAt: new Date()
}

addListItem(newTask)

function addListItem(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement('label')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    label.append(checkbox, task.title)
    item.append(label)
    
}
