import React from 'react';

class Workspace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [
                {id: 1, name: 'Chemistry', files: ['123123', '123i1', 'hey']},
                {id: 2, name: 'Electronics', files: ['123', '123']},
            ],
            selectedSubject: null,
            selectedFile: null
        };
    }

    handleSubjectClick = (subjectId) => {
        this.setState({selectedSubject: subjectId, selectedFile: null});
    }

    handleFileClick = (file) => {
        this.setState({selectedFile: file});
    }

    render() {
        const {subjects, selectedSubject, selectedFile} = this.state;

        return (
            <div className="file-explorer" style={{display: 'flex', alignItems: 'stretch'}}>
                <div className="subjects-pane" style={{
                    backgroundColor: "var(--bg)",
                    color: 'var(--fg)',
                    padding: '5px',
                    height: '100%',
                    width: '20%',
                    borderRadius: '10px'
                }}>
                    <h2>Subjects</h2>
                    <hr/>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {subjects.map(subject => (
                            <div>
                                <li key={subject.id} className={selectedSubject === subject.id ? 'selected' : ''}
                                    onClick={() => this.handleSubjectClick(subject.id)} style={{cursor: 'pointer'}}>
                                    {subject.name}
                                </li>
                                <hr/>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="files-pane" style={{flex: 2, padding: '10px'}}>
                    <h2>Files</h2>
                    {selectedSubject && (
                        <ul style={{listStyle: 'none', padding: 0}}>
                            {subjects.find(subject => subject.id === selectedSubject).files.map(file => (
                                <li key={file} className={selectedFile === file ? 'selected' : ''}
                                    onClick={() => this.handleFileClick(file)} style={{cursor: 'pointer'}}>
                                    {file}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

export default Workspace;
