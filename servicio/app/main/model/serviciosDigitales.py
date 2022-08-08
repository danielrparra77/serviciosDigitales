import json


class serviciosDigitalesModel():

    data = {}
    file = "app/main/model/data.json"

    def __init__(self):
        dataRaw = open(self.file, "rt")
        _json = dataRaw.read()
        self.data = json.loads(_json)
        print(self.data)

    def getData(self):
        return self.data["servicios"]
    
    def getEventCost(self,event):
        if event == "F001":
            return 20.5
        elif event == "F002":
            return 200
        elif event == "F003":
            return 55.9
        elif event == "F004":
            return 100
        elif event == "F005":
            return 32
        else:
            return 0

    def addServicio(self,newServ):
        print(self.data)
        newServ["valor"] = newServ["cantidad"]*self.getEventCost(newServ["evento"])
        self.data["servicios"].append(newServ)
        f1 = open(self.file, "wt")
        f1.write(json.dumps(self.data))
        f1.flush()
