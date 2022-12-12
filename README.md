# AngularPractices

### Data Transfer Between Parent and Child Component

- parent to child
```
@Input() functionName = '';
```
- child to parent
```
@Output() functionName = new EventEmitter<type>();
```

