# List view

> Present list of items.

## Overview
Import the view.

```js
import { List } from 'caoutchouc';
```

## Example

```js
    new UI.List({
        container: this.layout.main
      })
      .set('list', [{
        _id: 'item 1',
        name: 'item 1'
      }, {
        _id: 'item 2',
        name: 'item 2'
      }, {
        _id: 'item 3',
        name: 'item 3'
      }, {
        _id: 'item 4',
        name: 'item 4'
      }, {
        _id: 'item 5',
        name: 'item 5'
      }]);
```

## Options

Object with the following properties.

#### rangeSize
Type: `Integer`

Default value: `50`

When using virtual list define the size for a range.

#### save
Type: `Object`

Settings.

#### useTemplateModule
Type: `Boolean`

Default value: `true`

When `true` will use the template module (will be deprecated)

#### multipleSelect
Type: `Boolean`

Default value: `false`

When `true` will select multiple items in the list.

#### template
Type: `Object`

Template for items.

#### search
Type: `Object`

Search options.

#### status
Type: `Object`

Status options.

#### filter
Type: `Object`

Filter options.

#### expand
Type: `Object`

Expand options.

#### sort
Type: `Object`

Sort options.

#### separator
Type: `Object`

Separator options.


## API
Public Methods.

### get
---
Arguments: `(String) prop`, `(Mixed) value`

Return: `Mixed`

View getter can receive any of the following properties in the first argument.

#### listIds
Return: `Array`

Returns a list with the current ids in the view.

#### listIdsSelected
Return: `Array`

Returns a list with the selected ids in the view.

#### info
Return: `Object`

Returns the selected info.

#### lastInfoRange
not sure.

#### id
Return: `string`

Returns the id of the selected info.

#### infoById
Arguments: `(String) id`

Return: `Object`

Returns a object for a given id.

#### list
Return: `Array`

Returns a list with all the objects.

#### options
Arguments: `(String) value`

Return: `Mixed`

Returns the options for the given value or the complete options object.

#### control
Arguments: `(String) value`

Return: `Mixed`

Returns the control for the given value.

#### caller
Return: `Object`

Returns the view caller.

#### type
Return: `string`

Returns the view type.

### set
---
Arguments: `(String) prop`, `(Mixed) value`, `(Mixed) opts`

Return: `Mixed`

#### list
Arguments: `(Array) list`

Return: `(Object) this`

Set a list of objects.

#### virtualList
Arguments: `(Array) list`, `(Integer) range`, `(Integer) total`

Return: `(Object) this`

Set a list of objects.

#### range
Arguments: `(Array) list`

Return: `(Object) this`

Set a specific range (for virtual list).

#### info
Arguments: `(Object) info`

Return: `(Object) this`

Add a new object to the view.

#### settings
Arguments: `(Object) settings`

Return: `(Object) this`

Set a settings object in the view.

#### status
Arguments: `(String) value`

Return: `(Object) this`

Set a status.

#### searchValue
Arguments: `(String) value`

Return: `(Object) this`

Set a string to be defined in the search control.

#### selected
Arguments: `(String) id`, `(Boolean) quiet`

Return: `(Object) this`

Select the element in the list for the given id.