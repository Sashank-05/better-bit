import React from 'react';
import styles from './workspace.module.css'

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

            <div className="file-explorer" style={{display: 'flex', alignItems: 'stretch', height: '96vh'}}>

                <div className={styles.leftpane}>
                    <h2>Subjects</h2>
                    <hr/>
                    <ul style={{listStyle: 'none', padding: 25}}>
                        {subjects.map(subject => (
                            <div>
                                <hr/>
                                <li key={subject.id} className={selectedSubject === subject.id ? 'selected' : ''}
                                    onClick={() => this.handleSubjectClick(subject.id)} style={{cursor: 'pointer'}}>
                                    {subject.name}
                                </li>

                            </div>
                        ))}
                        <hr/>
                    </ul>
                </div>
                <div className="files-pane" style={{flex: '2', padding: '10px'}}>
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

const Background = () => {
    const backgroundStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "var(--bg-image)",
        filter: 'blur(0px)',
        zIndex: -1,
    };

    return <div style={backgroundStyle}></div>;
}
const WorkspaceExp = () => {

    return (
        <div>
            <Background/>
            <Workspace/>
        </div>
    )
};
export default WorkspaceExp;
