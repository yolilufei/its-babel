## 前置属性解释
- start 表示的是语句起始位置，用 number 表示，需要注意的是 start 的值不是行号或列号，是相对项目第一个字符（start 为 0）的偏移量。换句话说，start 表示的项目内字符索引。
- end 表示语句结束位置，用 number 表示。需要注意的是 end 不表示字符索引。 比如下面这个[例子](https://astexplorer.net/):
    ![截图][1]
    左侧是一个赋值语句，字符个数是10，同时该语句从项目启示位置开始，因此，end 就是 start + 10 = 0 + 10 = 10, 而 `;` 的索引是 9，因此，end 的值可以通过 `end = start + 语句字符个数` 计算。
    

## Patterns



## AssignmentPattern
AssignmentPattern 用来描述赋值语句的类型，其类型定义如下（类型定义用 typescript 表示）
```typescript
    interface AssignmentPattern<Pattern, Expression> {
        // 类型，一般和 interface 名称保持一致
        type: 'AssignmentPattern';
        // 赋值语句左侧语法类型
        left: Pattern;
        // 赋值语句右侧语法类型
        right: Expression;
        // 赋值语句其实位置
        start: number;
        // 赋值语句结束位置
        end: number
    }
```

参考链接：
1. [https://astexplorer.net/](https://astexplorer.net/)
2. [git estree](https://github.com/yolilufei/estree/blob/master/es5.md#identifier)
3. [https://segmentfault.com/a/1190000015653342#item-6-24](https://segmentfault.com/a/1190000015653342#item-6-24)

[1]: ./images/ast/1.png