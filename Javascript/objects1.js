function Student(name,sclass,rollno)
{
    this.name=name;
    this.sclass = sclass;
    this.rollno = rollno;
    this.fullname = function()
    {
        console.log(this.name);
    }
}

const stu = new Student("Dev Varshney",'12',"2125");
for (let key in stu)
{
    console.log(stu[key]);
}