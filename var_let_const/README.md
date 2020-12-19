# ---------------- let vs var ----------------

### According to Scoping rules  :
    Variables declared by **var** keyword are scoped to the immediate function body (hence the function scope) 
    
    while **let** variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).

### According to Hoisting
    While variables declared with **var** are initialized with **undefined** before the code is run

    *let* variables are not initialized until initialized . Accessing them before the initialization results in a *ReferenceError*

### Redeclaration
    *var* will let you re-declare the same variable in the same scope while let raises a SyntaxError.


# ---------------- const ----------------

    if variable is not **array or object** , const value can not be changed 
    if variable is just **string , numbers** then const value can not be changed