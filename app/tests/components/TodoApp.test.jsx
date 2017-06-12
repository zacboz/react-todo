var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = "test text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });

  // describe('filterTodos', () => {
  //   var todos = [{
  //     id: 1,
  //     text: 'some text here',
  //     completed: true
  //   }, {
  //     id: 2,
  //     text: 'other text here',
  //     completed: false
  //   }, {
  //     id: 3,
  //     text: 'some more text here',
  //     completed: true
  //   }];
  //
  //   it('should return all items if showCompleted is true', () => {
  //     var filteredTodos = TodoApi.filterTodos(todos, true, '');
  //     expect(filteredTodos.length).toBe(3);
  //   });
  // });
});
