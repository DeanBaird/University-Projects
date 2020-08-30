function saveSchedule() {
    var scheduleName = $('#schedule-name').val();
    user = new Schedule(scheduleName);
    alert(user.saveSchedule(scheduleName));
}

class Schedule{
    constructor(name) {
        this.name = name;
    }

    saveSchedule(scheduleName){
        $("#caption-text").html(this.name);
        $("#panel").hide();
        html2canvas(document.body, {
            dpi: 192,
            onrendered: function(canvas) {
                $("#blank").attr('href', canvas.toDataURL("image/png"));
                $("#blank").attr('download', scheduleName + '.png');
                $("#blank")[0].click();
            }
        });
        return `Schedule - '${this.name}' successfully saved`;
    }
}