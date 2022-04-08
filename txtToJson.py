txt = open("./src/assets/wordleWordList.txt", "r")
json = open("./src/assets/wordleWordList.json", "a")

json.write("{ words: [ ")

for line in txt:
  json.write('"')
  json.write(line.splitlines()[0])
  json.write('", ')

json.write("] } ")

txt.close()
json.close()  