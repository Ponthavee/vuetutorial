new Vue({
    el: "#vue-app",
    data: {
        newData: {
            empName: '',
            salary: 0
        },
        empGroup: [
            {
                empName: "Somporn",
                salary: 50000
            },
            {
                empName: "Somsri",
                salary: 60000
            }
        ]
    },
    methods: {
        addEmp: function () {
            this.empGroup.push({
                empName: this.newData.empName,
                salary: this.newData.salary
            });
            this.newData.empName = ''
            this.newData.salary = 0
        },
        showMessage: function () {
            alert("บันทึกข้อมูลเรียบร้อย")
        }

        /*สามารถส่งค่าเข้ามาคำนวณได้
        summation:function(a,b){
            var sum=a+b
            return sum
        }*/
    },
    computed: {
        //แยกมาจัดการด้านการคำนวณ
        //เวลาเรียกใช้งาน ห้ามไม่มีการส่งค่าเข้ามาคำนวณ
        summation: function () {
            var sum = this.empGroup.reduce(function (value, data) {
                return value + Number(data.salary)
            }, 3);
            return sum;
        },
        avg: function () {
            var avgr = this.empGroup.reduce(function (value, data) {
                return value + Number(data.salary);
            }, 0);
            return avgr / this.empGroup.length;
        }
    },
    watch: {
        //ทำงานหลังจากที่ function avg ทำงานเสร็จเรียบร้อยแล้ว
        summation: function () {
            this.showMessage();
        }
    }


});