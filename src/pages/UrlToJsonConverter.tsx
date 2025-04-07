import { useState } from 'react';
import ReactJson from 'react-json-view';

const UrlToJsonConverter = () => {
  const [jsonString, setJsonString] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [targetParsed, setTargetParsed] = useState<{
    value: string | null;
    type: 'url' | 'json_string';
  }>();

  const convertUrlToJson = (target: string, type: 'url' | 'json_string') => {
    try {
      if (type === 'url') {
        const _decodedUrl = decodeURIComponent(target);
        const parseBase64 = atob(_decodedUrl);
        return JSON.parse(parseBase64);
      }
      if (type === 'json_string') {
        return JSON.parse(target);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen w-[calc(100vw-50px)] items-center justify-between pr-[50px]">
      <div>
        <div className="flex justify-start py-5">
          <input
            className="mx-2.5 w-[300px] p-2.5 text-base"
            placeholder="Enter the URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 text-black hover:bg-blue-600"
            onClick={() =>
              setTargetParsed({
                value: url,
                type: 'url',
              })
            }
          >
            Convert URL
          </button>
        </div>
        <div className="flex justify-start">
          <input
            className="mx-2.5 w-[300px] p-2.5 text-base"
            placeholder="Enter the json string"
            onChange={(e) => setJsonString(e.target.value)}
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 text-black hover:bg-blue-600"
            onClick={() =>
              setTargetParsed({
                value: jsonString,
                type: 'json_string',
              })
            }
          >
            Convert json string
          </button>
        </div>
      </div>

      <div className="flex h-[600px] w-[calc(100%-200px)] items-center justify-center">
        {targetParsed?.value ? (
          <ReactJson
            src={convertUrlToJson(targetParsed.value, targetParsed.type)}
            theme={'monokai'}
            style={{
              width: '100%',
              height: '100%',
              overflow: 'scroll',
            }}
          />
        ) : (
          <div className="text-black">
            <h1 className="text-2xl font-bold">Enter a valid URL or JSON string</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlToJsonConverter;
