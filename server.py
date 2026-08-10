import http.server
import os

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Try the path as-is first
        path = self.translate_path(self.path)
        if not os.path.exists(path) and not self.path.endswith('/'):
            # Try appending .html
            self.path = self.path + '.html'
        return super().do_GET()

if __name__ == '__main__':
    server = http.server.HTTPServer(('0.0.0.0', 3000), CleanURLHandler)
    print('Serving on port 3000')
    server.serve_forever()
