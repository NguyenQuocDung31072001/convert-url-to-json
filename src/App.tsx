import { useState } from "react"
import ReactJson from "react-json-view"

function App() {
  const [jsonString, setJsonString] = useState<
    string | null
  >(null)
  const [url, setUrl] = useState<string | null>(
    null,
  )

  const [targetParsed, setTargetParsed] =
    useState<{
      value: string | null
      type: "url" | "json_string"
    }>()
  const convertUrlToJson = (
    target: string,
    type: "url" | "json_string",
  ) => {
    try {
      if (type === "url") {
        const _decodedUrl =
          decodeURIComponent(target)
        const parseBase64 = atob(_decodedUrl)
        return JSON.parse(parseBase64)
      }
      if (type === "json_string") {
        return JSON.parse(target)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        paddingRight: "50px",
        height: "100vh",
        width: "calc(100vw - 50px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            paddingBlock: "20px",
          }}
        >
          <input
            style={{
              padding: "10px",
              fontSize: "16px",
              margin: "10px",
              width: "300px",
            }}
            placeholder="Enter the URL"
            onChange={(e) =>
              setUrl(e.target.value)
            }
          />
          <button
            onClick={() =>
              setTargetParsed({
                value: url,
                type: "url",
              })
            }
          >
            Convert URL
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <input
            style={{
              padding: "10px",
              fontSize: "16px",
              margin: "10px",
              width: "300px",
            }}
            placeholder="Enter the json string"
            onChange={(e) =>
              setJsonString(e.target.value)
            }
          />
          <button
            onClick={() =>
              setTargetParsed({
                value: jsonString,
                type: "json_string",
              })
            }
          >
            Convert json string
          </button>
        </div>
      </div>

      <div
        style={{
          width: "calc(100% - 200px)",
          height: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {targetParsed?.value ? (
          <ReactJson
            src={convertUrlToJson(
              targetParsed.value,
              targetParsed.type,
            )}
            theme={"monokai"}
            style={{
              width: "1000px",
              height: "800px",
              overflow: "scroll",
            }}
          />
        ) : (
          <div style={{ color: "white" }}>
            <h1>
              Enter a valid URL or JSON string
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
